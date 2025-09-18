function Form() {
    return (
        <div>
            <form id="upload Form" action="https://cloud-box-server.onrender.com/upload" className="border border-1 border-black p-3" method="post" encType="multipart/form-data">
                <input type="file" name="samplefile" required multiple />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default Form;
