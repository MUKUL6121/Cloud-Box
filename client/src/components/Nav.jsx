import { Link } from 'react-router-dom'
export default function form() {
    return (
        <>
            <h2>Upload a File</h2>
            <br />
            <div>
                <ul style={{ listStyle: "none", padding: "0", display: "flex", flexDirection: "row", gap: "10px" }}>
                    <li><Link to="http://localhost:5173/files">View Uploaded Files</Link></li><br />
                    <li><Link to="http://localhost:5173/Form">Upload Another File</Link></li><br />
                    {/* <li><Link to="http://localhost:5500/">Go to Home</Link></li><br /> */}
                </ul>
            </div>


        </>
    )
};