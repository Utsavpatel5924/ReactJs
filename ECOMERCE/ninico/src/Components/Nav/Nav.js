import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Catagories from '../Catagories/Catagories'

const Nav = () => {
  return (
    <>
      <div className='flex '>
        <div>
          <Catagories className='dropdown-content'/>
        </div>
        <div className='z-10'>
          <div className='btn-red  pl-2 mt-5 flex items-center justify-between '>
            <div >
              <div className="dropdown ">
                <button className='dropbtn text-sm hover:text-rose-600'>
                <Link to="/" className='hover:text-rose-600'> Home</Link>
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </button>
                <div className="dropdown-content border-t-2 border-rose-500  rounded-b-xl">
                  <ul>
                    <li><Link to="/" className='hover:text-rose-600'>Wooden Home</Link></li>
                    <li><a href="#" className='hover:text-rose-600'>Fashion Home</a></li>
                    <li><a href="#" className='hover:text-rose-600'>Furniture Home</a></li>
                    <li><a href="#" className='hover:text-rose-600'>Cosmetics Home</a></li>
                    <li><a href="#" className='hover:text-rose-600'>Food Grocery</a></li>
                  </ul>
                </div>
              </div>

              <div className="dropdown pl-3">
                <button className='dropbtn text-sm hover:text-rose-600'>
                  Shop
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </button>
                <div className="dropdown-content border-t-2 border-rose-500  rounded-b-xl">
                  <ul>
                    <li><a href="" className='hover:text-rose-600'>Shope 2</a></li>
                    <li><a href="" className='hover:text-rose-600'>Shope Details</a></li>
                    <li><a href="" className='hover:text-rose-600'>Shope Details 2</a></li>
                    <li><a href="" className='hover:text-rose-600'>Shope Location</a></li>
                    <li><a href="" className='hover:text-rose-600'>Cart</a></li>
                    <li><a href="" className='hover:text-rose-600'>Sing in</a></li>
                    <li><a href="" className='hover:text-rose-600'>Checkout</a></li>
                    <li><a href="" className='hover:text-rose-600'>Wishlist</a></li>
                  </ul>
                </div>
              </div>

              <div className="dropdown pl-3">
                <button className='dropbtn text-sm hover:text-rose-600'>
                  Pages
                  <i className="fa-solid fa-angle-down ml-1"></i>
                </button>
                <ul className="dropdown-content border-t-2 border-rose-500  rounded-b-xl text-left flex justify-between w-[700%]">
                  <ul className='w-[30%]'>
                    <h2 className='font-semibold text-lg px-4 py-3 cursor-pointer hover:text-rose-600'>PAGE LAYOUT</h2>
                    <li ><a href="" className='hover:text-rose-600'>Shope Filters V1</a></li>
                    <li><a href="" className='hover:text-rose-600'>Shope Filters V2</a></li>
                    <li><a href="" className='hover:text-rose-600'>Shope sidebar</a></li>
                    <li><a href="" className='hover:text-rose-600'>Shope Right  sidebar</a></li>
                    <li><a href="" className='hover:text-rose-600'>Shope List View</a></li>
                    <li><a href="" className='hover:text-rose-600'></a></li>
                  </ul>
                  <ul className='w-[30%]' >
                    <h2 className='font-semibold text-lg px-4 py-3 cursor-pointer hover:text-rose-600'>PAGE LAYOUT</h2>
                    <li><Link to="/about" className='hover:text-rose-600'>About</Link></li>
                    <li><Link to="/cart" className='hover:text-rose-600'>Cart</Link></li>
                    <li><a href="" className='hover:text-rose-600'>Checkout</a></li>
                    <li><Link to="/register" className='hover:text-rose-600'>Sign In</Link></li>
                    <li><Link to="/register" className='hover:text-rose-600'>Log In</Link></li>
                  </ul>
                  <ul className='w-[30%]'>
                    <h2 className='font-semibold text-lg px-4 py-3 cursor-pointer hover:text-rose-600'>PAGE TYPE</h2>
                    <li><a href="" className='hover:text-rose-600'>Product Track</a></li>
                    <li><Link to="/wishlist" className='hover:text-rose-600'>Wishlist</Link></li>
                    <li><Link to="/*" className='hover:text-rose-600'>404 / Error</Link></li>
                    <li><a href="" className='hover:text-rose-600'>Coming Soon</a></li>
                  </ul>
                </ul>
              </div>

              <div className="dropdown pl-3">
                <button className='dropbtn text-sm hover:text-rose-600'
                >About <i className="fa-solid fa-angle-down ml-1"></i>
                </button>
                <div className="dropdown-content border-t-2 border-rose-500  rounded-b-xl">
                  <ul>
                    <li><Link to="/about" className='hover:text-rose-600'>About</Link></li>
                  </ul>
                </div>
              </div>
              <div className="dropdown pl-2">
                <button className='dropbtn text-sm hover:text-rose-600' >
                  <Link to="/contact  " className='hover:text-rose-600'>Contact</Link></button>
              </div>

            </div>




            <div className='home-bar2 ms-[200px] pl-5 flex '>

              <div className='header-call flex'>
                <a href="#" className='text-rose-600 hover:text-rose-600 '><i className="fa-solid fa-phone-flip"></i></a>
                <p className='font-bold pl-2 hover:text-rose-600'>908.569.267.008</p>
              </div>

              <div className='header-map flex pl-2'>
                <a href="#" className='text-rose-600'><i className="fa-solid fa-location-dot"></i></a>
                <p className='font-bold pl-2 text-sm  hover:text-rose-600'>Find Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
