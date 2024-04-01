import { useState } from "react";

function HomePage() {
    const [name, setName] = useState("John")
    const handleClick = () => {
        setName("Louisse")
    }
    return (

        <div>
            <h1>Test</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default HomePage;


