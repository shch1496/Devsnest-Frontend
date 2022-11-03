import  { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("initial");
  console.log("Counter rendered ", count)
  // const handleClick  = () => {
  //   setCount(count+1); //0+1 = 1
  //   setCount(count+1); // 0+ 1 = 1
  //   setCount(count+1); // 0 + 1 = 1
  //   setCount(count+3); //0 +3 = 3
  //   // only the last one is used
  // }

  //updater function Syntax -. All the updater function recives the latest value
  //Batching
  const handleClick  = () => {
    //Calculate next state based on previous state
    setCount(prevCount => prevCount+1); //0+1 = 1
    setCount(prevCount => prevCount+1); // 1+1 = 2
    setCount(prevCount => prevCount+1); // 1+2 = 3
    setCount(prevCount => prevCount+1); // 3 + 1 =4
    setText(`${text} ${count}`)
    console.log("After click", count)
  }


  return (
    <div>
        <button onClick={handleClick}>Count: {count}</button>
        {text}
    </div>
  )
}

export default Counter;