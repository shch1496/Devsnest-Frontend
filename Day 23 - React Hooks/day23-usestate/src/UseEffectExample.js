import React, { useEffect, useState } from 'react'

function UseEffectExample() {

  console.log("render")
  const [cursorPosition, setCursorPosition] = useState({x: 0, y:0});
  useEffect(() => {

    const handleMove = (e) => {
      setCursorPosition({x: e.clientX, y:e.clientY })
      console.log("pointer move event ")
    }
    console.log("Add Event Listener added for pointer move")
    // Add event listener only added once when the component is rendered for first time
    window.addEventListener("pointermove", handleMove)

    //clean up function -> is called whenever the component is removed/ unmounted
    return window.removeEventListener("pointermove", handleMove);
  }, []);




  return (
    <div>x: {cursorPosition.x}, y: {cursorPosition.y}</div>
  )
}

export default UseEffectExample