const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

var corsoptions = {
    origin: ['http://localhost:5173','https://cloud-box-zf9g.onrender.com'],
    // method: 'GET',
    optionsSuccessStatus: 200
};
app.use(cors(corsoptions));
app.use(fileupload());

app.get('/', (req, res) => {
    res.send("your file uploading is site is working");
});

app.post('/upload', (req, res) => {
    let samplefile;
    let uploadpath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
        // let update = "0";
    }
    // Use the mv() method to place the file somewhere on your server
    else {
        samplefile = req.files.samplefile;
        uploadpath = path.join(__dirname, '/assets', samplefile.name);

        samplefile.mv(uploadpath, (err) => {
            if (err) {
                return res.send(err);
            }
            res.json({ status: "1", message: `File uploaded: ${samplefile.name}` });
        })
    }
});

app.get('/files', (req, res) => {
    const location = path.join(__dirname, '/assets');
    fs.readdir(location, (err, files) => {
        if (err) {
            console.log("there is 0 files.");
            res.send("there is no files.");
        } else {
            res.send(JSON.stringify(files));
        }
    });
});

app.listen(5500, () => {
    console.log('Server started on http://localhost:5500');
});
