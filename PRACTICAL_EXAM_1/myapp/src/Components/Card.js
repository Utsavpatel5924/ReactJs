import React from 'react'
const Card = (props) => {
  return (
    <div className='mt-10 bg-blue-900'>

    <div className='flex '>

      <div className='card h-auto  w-auto border-2 border-solid border-black ' >
        <div className='flex justify-center bg-blue-300'>
          <img src={props.img} className='h-48 w-48 rounded-full hover:border-4 border-white' alt="" />
        </div>
        <div className='bg-blue-500 '>
          <p className='text-2xl'>Id:{props.id}</p>
          <p className='text-4xl'>Name:{props.name}</p>
          <p className='text-3xl'>Age:{props.age}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
