import './App.css';
import { useState } from 'react';
import Counter from './counter';
import List from './List';
import UseEffectExample from './UseEffectExample';
import Products from './Products';

function App() {
  let localVariable = "abc"
  console.log("Rerenderd")
  const [text, setText] = useState("Devsnest");
  console.log("Initial value of local variable ", localVariable)
 

  const handleChange = (event) => {
    localVariable = event.target.value;
    setText(event.target.value);
    // Triggers a rerender
    // Update the state variable
    console.log("Local Variable ",localVariable);
  }
  return (
  //   <div className="App">
  //       <input type="text" name="content" id="content" onChange={handleChange}/>
  //       {text}
  //   </div>
  // <Counter />
  <Products/>
  // <List />
  
  );
}

export default App;
