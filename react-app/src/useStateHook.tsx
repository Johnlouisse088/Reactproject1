import { useState } from "react";

function HomePage() {
    const [name, setName] = useState("John")
    const letters = ["J", "o", "h", "n"]
    const [num, setNum] = useState(0);  
    const handleClick = () => {
        if (num >= letters.length){
            return
        }
        setName(letters[num]);
        setNum(num+1);
        
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