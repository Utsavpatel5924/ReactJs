import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-between'>
            <li><Link to="/" className='text-red-500'>Home</Link></li>
            <li><Link to="/About" className='text-blue-500'>About</Link></li>
            <li><Link to="/Seating" className='text-green-500'>seating</Link></li>
            <li><Link to="/Help" className='text-pink-500'>Help</Link></li>
        </ul>
        
      
    </div>
  )
}

export default Navbar
