import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);

    const myFunc_inc = () => {
        console.log("click");
        setCount(count + 1);
    }
    const myFunc_Dec = () => {
        console.log("click");
        if(count===0){
            setCount(0)
        }
        else{
            setCount(count - 1);
        }
    }
    const Resat = () => {
        setCount(0);
    }

    return (
        <div className='flex justify-center bg-gray-500 max-h-[100vh] max-w-[50%] '>
            <div className='bg-blue-200 h-96 w-96  rounded-full border-4 border-black' >
                <div className='mt-20  '>
                    <button onClick={myFunc_Dec} className='border-2 items-center  border-black bg-blue-600 mb-5 h-10 w-40 rounded-xl' >Decrement-- </button>
                    <h3 className='text-5xl h-14 w-40 items-center rounded-full bg-white ms-28 border-4 border-black'>{count}</h3>
                    <button onClick={myFunc_inc} className='border-2 border-black bg-blue-600 h-10 w-40 mt-5 rounded-xl'>increment++   </button><br/>
                    <button onClick={Resat} className='border-2 border-black bg-red-500 h-10 w-40 mt-10 rounded-xl'>Resat</button>
                </div>
            </div>
        </div>

    )
}

export default Counter
