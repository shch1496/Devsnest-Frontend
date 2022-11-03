import React, { useState } from 'react';
import "./index.css";

function List() {
  const getItems = () => {
    console.log("%c getItems called", "color:royalblue");
    return Array(50).fill(0);
  }

//   const [items, setItems] = useState(getItems()); // incorrect way
   
//Whwnever using a function to obtain the initial value -> use initialiser value syntax
    // const [items, setItems] = useState(getItems); // correct way
    const [items, setItems] = useState(() => getItems()); // correct way

  return (
    <div className='card'>
        <ul className='items'>
            {items.map((item, index) => <li key={index}>{index+1}</li>)}
        </ul>
        <button onClick={() => setItems([...items, 0])}>Add Item</button>
    </div>
  )
}

export default List