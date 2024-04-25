import './App.css';
import React,{useReducer} from 'react';

let initialArg=0;

const Reduser=(state,action)=>{
  console.log(state,action,"state,action");
  if(action.type === "decrement"){
    // return state-1;
    if(state==0.5){
      return state-0.5;
    }else{
      return state-1;
    }
  }
  if(action.type === "increment"){
    // return state+1.5;
    if(state==0){
      return state+0.5;
    }else{
      return state+1;
    }
  }
  return state;
}

function App() {
  // const [count,setCount]=useState(0);
  const [state,dispatch]=useReducer(Reduser,initialArg)
  return (
    <div className="App">
      <h1 className="text-9xl" >{state}</h1>
      
      <button className='border-2 items-center text-2xl text-white border-black bg-blue-600 mb-5 h-10 w-40 rounded-xl' onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button className='ms-5 border-2 items-center text-2xl text-white  border-black bg-blue-600 mb-5 h-10 w-40 rounded-xl' onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </div>
  );
}

export default App;
