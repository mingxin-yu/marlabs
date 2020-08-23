import React, { useState } from 'react';

function App() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("Does not exist");

    const click = () => {
        var url = "https://jsonplaceholder.typicode.com/posts/" + id;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTitle(data.title)})}

    return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <input onChange = {id => setId(id.target.value)}></input>
            <button onClick={click}>
                Set Post
            </button>
            <br></br>
            <div>
            {title}
            </div>
        </div>
    );
}
export default App;
