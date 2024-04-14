import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react"

function App() {
  const a=useRef();
  console.log(a);
  const ref =()=>{
    // a.current.focus();
    a.current.style.color="red";
    // a.current.style.display="none"
    a.current.style.border="10px solid black"
  }
  return (
    <div className="App">
     <input type="text" ref={a} className='border-2'/>
      <button onClick={ref} className='bg-slate-400'>click me</button>
    </div>
  );
}

export default App;
