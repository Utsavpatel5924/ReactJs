import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Asset/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-200'>

      <img src={logo} alt="" className='h-16 w-32 ' />
      <div>
        <ul className='flex justify-end items-center'>
          <li><Link to="/" className=' text-5xl hover:text-white'>Home</Link></li>
          <li><Link to="/About" className='ms-10 text-5xl hover:text-white'>About</Link></li>
          <li><Link to="/Help" className='ms-10 text-5xl hover:text-white'>Contact</Link></li>
        </ul>
      </div>
      <div>
        <button className='h-16 w-40 bg-blue-500 border-2 border-black rounded-xl hover:bg-blue-400'>Log in</button>
        <button className='h-16 w-40 bg-blue-500 border-2 border-black rounded-xl ms-2 hover:bg-blue-400'>Ragister</button>
      </div>
    </div>
  )
}

export default Navbar
