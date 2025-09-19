import { useState } from "react";

function Form() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");

    const submitform = async (e) => {
        e.preventDefault(); // ✅ Stop page reload

        if (!file) {
            setStatus("Please select a file first");
            return;
        }

        const formdata = new FormData();
        formdata.append("samplefile", file);

        try {
            const res = await fetch("https://cloud-box-server.onrender.com/upload", {
                method: "POST",
                body: formdata, // ✅ Send FormData directly
            });

            // If server responds with text like "1", use .text()
            const result = await res.json();
            setStatus(result.status === "1" ? "Uploaded" : "Failed");
        } catch (err) {
            console.error("Upload failed:", err);
            setStatus("Upload failed");
        }
    };

    return (
        <div>
            <h3>{status}</h3>
            <form
                onSubmit={submitform}
                className="border border-1 border-black p-3"
                encType="multipart/form-data"
            >
                <input
                    type="file"
                    name="samplefile"
                    onChange={(e) => setFile(e.target.files[0])}
                    multiple
                    required
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Form;
