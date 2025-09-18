import axios from 'axios';
import { useEffect, useState } from 'react';


function Files() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5500/files")
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
            {data.map((item, index) => {
                return <ol >
                    <li key={index} value={index+1}>{item}</li>
                </ol>
            })}
        </div >
    )
}

export default Files;