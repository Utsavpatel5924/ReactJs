import React from 'react'

const Emoji = ({a,b,c}) => {
  let t="";
  if(a===b && b===c ){
    t="This Is Matching"
  }
  else{
    t="This Is not Matching"
  }

  return (
    <div className='min-h-[100vh]  bg-lime-400  border-4 border-black rounded-2xl'>
      <h1 className='bg-red-700  text-5xl text-center mt-5 border-4 border-black rounded-2xl ' >This is  Emoji Task</h1>
      <div className='flex justify-around mt-10'>
        <div className='text-9xl border-4 border-black rounded-2xl h-44 w-44 bg-green-700 '>{a}</div>
        <div className='text-9xl border-4 border-black rounded-2xl h-44 w-44 bg-green-700'>{b}</div>
        <div className='text-9xl border-4 border-black rounded-2xl h-44 w-44 bg-green-700'>{c}</div>
      </div>
      <h1  ></h1>
      <p className='text-7xl  bg-slate-500 mt-5 border-4 border-black rounded-2xl'>{t} </p>
    </div>
  )
}

export default Emoji
