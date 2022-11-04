import {useState, useEffect} from 'react'
import "./App.css"
import Counter from './Counter';
import DemoCounter from './DemoCounter';
import KittyGallery from './KittyGallery';
import StopWatch from './StopWatch';
import useLocalStorage from './useLocalStorage';
import Header from './Header';

function App() {

  const [username, setUsername] = useLocalStorage("username", "");
  const [showHeader, setShowHeader] = useState(false);
  console.log("%c App: render start", "color: orange");
  const [showCounter, setShowCounter] = useState(() => {
    console.log("%c App: useState", "color: coral");
    return false;
  })



  useEffect(() => {
    console.log("%c App: useEffect no deps called", "color:royalblue");

    return () => {
        console.log("%c App: useEffect no deps clean up", "color: darkred");
    }
  });


  useEffect(() => {
    console.log("%c App: useEffect empty deps called", "color:royalblue");

    return () => {
        console.log("%c App: useEffect empty deps clean up", "color: darkred");
    }
  }, []);


  useEffect(() => {
    console.log("%c App: useEffect with deps called", "color:royalblue");

    return () => {
        console.log("%c App: useEffect with deps clean up", "color: darkred");
    }
  }, [showCounter]);


  function submitForm(e) {
     e.preventDefault();
     setShowHeader(prev => !prev)

  }
 const element =  (
    <>
    { showHeader && <Header />}
    <main className="App">
        <label htmlFor="showCount">Show Counter</label>
        <input type="checkbox" name="showCounter" id="showCounter" onChange={(e) => setShowCounter(e.target.checked)}/>
         {showCounter && <DemoCounter />}
       
        {/* <Counter /> */}
        {/* <StopWatch /> */}
        {/* <KittyGallery /> */}
        {/* <DemoCounter /> */}
       
       <form action="" onSubmit={submitForm}>
       <fieldset>
           <label htmlFor="username">Username</label>
           <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </fieldset>

        <button typ="submit">Login</button>
       </form>
     
    </main>
    </>
  )


  console.log("%c App: render end", "color: hotpink")


  return element
}

export default App