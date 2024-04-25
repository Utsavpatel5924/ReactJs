import React from 'react'
import {useMemo,useState} from 'react'

const UseMemo = () => {
    const [Count,setCount]=useState(0);
    const [Item,setItem]=useState(10);

    function multiFun(){
        console.log("Multipul time calling")
        return Count*5;
    }

    const multiFunction=useMemo(
        function multiFun(){
            console.log("Multipul time calling")
            return Count*5;
        },[Count]
    
    )

  return (
    <div>
    <h1 className='text-6xl'>HOOK -useMemo</h1>
    <h1>{Count}</h1>
    <button onClick={()=>setCount(Count+1)} className='bg-blue-500 text-4xl border-2 border-black'>Click Count</button> <br />
    {/* <h1>{multiFun()}</h1> */}
    <h1>{multiFunction}</h1> <br />
      
    <h1>{Item}</h1>
    <button onClick={()=>setItem(Item+1)}  className='bg-blue-500 text-4xl border-2 border-black'>Click Count</button> <br />
    </div>
  )
}

export default UseMemo
