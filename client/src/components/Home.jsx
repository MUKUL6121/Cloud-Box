function Home() {
    return (
        <div>
            <ul style={{ listStyle: "none", padding: "0", display: "flex", flexDirection: "row", gap: "10px" }}>
                <li><a href="http://localhost:5500/files">View Uploaded Files</a></li><br />
                <li><a href="http://localhost:5173/Form">Upload Another File</a></li><br />
                {/* <li><a href="http://localhost:5500/">Go to Home</a></li><br /> */}
            </ul>
        </div>
    )
};

export default Home;