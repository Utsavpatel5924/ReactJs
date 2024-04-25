import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Asset/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-200'>

      <img src={logo} alt="" className='h-16 w-32' />
      <div>
        <ul className='flex justify-end items-center'>
          <li><Link to="/" className=' text-5xl hover:text-white'>Home</Link></li>
          <li><Link to="/About" className='ms-10 text-5xl hover:text-white'>About</Link></li>
          <li><Link to="/Help" className='ms-10 text-5xl hover:text-white'>Contact</Link></li>
        </ul>


      </div>
    </div>
  )
}

export default Navbar
