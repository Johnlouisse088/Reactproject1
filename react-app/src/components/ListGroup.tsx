import { MouseEvent, useState } from "react";
// 44:43 - Managing state (undocumented in Remnote)
function ListGroup() {
    let items = ["apple", "banana", "orange"];  
    // const handleClick = (event : MouseEvent) => console.log(event);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>List</h1>                   
            <ul className="list-group">
                { items.map((item, index) => 
                <li 
                    className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
                    key={item} 
                    onClick={() => setSelectedIndex(index)}> 
                {item} 
                </li>) }
            </ul>
        </>                     
    );
}
export default ListGroup;



