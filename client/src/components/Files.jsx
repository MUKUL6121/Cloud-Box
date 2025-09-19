import axios from 'axios';
import { useEffect, useState } from 'react';


function Files() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://cloud-box-server.onrender.com/files")
            .then((res) => {
                setdata(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <ol >
                {
                    data.map((item, index) => {
                        return <li key={index} value={index + 1}>{item}</li>
                    })
                }
            </ol>
        </div >
    )
}

export default Files;
