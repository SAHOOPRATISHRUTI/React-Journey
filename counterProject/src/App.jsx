import "./App.css";
import { useState } from "react";

// function App() {
//   let[counter,setCounter] = useState(0)
  
//   // let counter = 4;

//   const addValue = () => {
//     counter = counter+1;
//     setCounter(counter)
//     console.log("clicked", counter);
    
//   };
//   const removeValue = () => {
//     counter = counter-1;
//     setCounter(Math.max(0,counter-1)) 
//     console.log("Value Remove", counter);
//   };

//   return (
//     <>
//       <h1>React Journey 12th Sep 2024 </h1>
//       <h2>Counter Value:{counter}</h2>
//       <button onClick={addValue}>Add Value :{counter}</button>

//       <br />

//       <button onClick={removeValue}>Remove Value :{counter}</button>

//       <footer>Footer :{counter}</footer>
//     </>
//   );
// }



function App(){
  let[count,setCount]=useState(0)

  const addValue = ()=>{
    count=count+1;
    setCount(Math.max(0,count))
  }
  const removeValue = ()=>{
    count=count-1;
    setCount(Math.max(0,count))
  }
  return(
    <>
    <h1>Use Of useState Hook</h1>
    <h2>Value:{count}</h2>
    <button onClick={addValue}>Add Value:{count}</button>
    <br></br>
    <button onClick={removeValue}>Remove Value:{count}</button>
    </>
  )
}

export default App;
