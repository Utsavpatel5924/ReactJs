import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div>
      {/* <div className='flex mt-5 mb-3'>
        <div className='flex '>
          <div class="nav-items ms-2">
            <nav>
              <ul className='flex'>
                <li>
                  <select name="" id="">
                    <option value="" selected> Home</option>
                    <option value="">Wooden Home</option>
                    <option value=""> Fashion Home</option>
                    <option value="">  Furniture Home</option>
                    <option value="">  Cosmetics Home</option>
                    <option value="">  Food Grocery</option>
                  </select>
                </li>
                <li className='ms-10'>
                  <select name="Shop" id="">
                    <option value="" selected>Shop</option>
                    <option value="">  Shop 2</option>
                    <option value="">  Shop Details</option>
                    <option value="">  Shop Details 2</option>
                    <option value=""> Shop Location</option>
                    <option value=""> Cart</option>
                    <option value=""> Sign In</option>
                    <option value="">  Checkout</option>
                    <option value="">  Wishlist</option>
                    <option value="">  Product Track</option>
                  </select>
                </li>
                <li className='ms-10'>
                  <select name="" id="">
                    <option value="" selected >PAGE  </option>
                    <option value="" >PAGE LAYOUT </option>
                    <option value="">Shop Filters V1</option>
                    <option value="">  Shop Filters V2</option>
                    <option value="">  Shop Sidebar</option>
                    <option value=""> Shop Right Sidebar</option>
                    <option value=""> Shop List View</option>
                    <option value=""> PAGE LAYOUT</option>
                    <option value=""> About</option>
                    <option value="">Cart </option>
                    <option value="">  Checkout</option>
                    <option value="">  Sign In</option>
                    <option value="">  Log In</option>
                    <option value="">PAGE TYPE</option>
                    <option value="">Product Track</option>
                    <option value="">Wishlist</option>
                    <option value="">404 / Error</option>
                    <option value="">Coming Soon</option>
                  </select>
                </li>
                <li className='ms-10'>
                  <select name="" id="">
                    <option value="" selected> Blog</option>
                    <option value="">Blog Details</option>

                  </select>
                </li>
                <li className='ms-10'><a href="#">Contact</a></li>
              </ul>
            </nav>

          </div>
        </div>
        <div className='flex justify-end ms-40'>
          <div>
            <span><i class="fa-solid fa-phone text-red-500"></i></span>
            <span> 908. 408. 501. 89 </span>
          </div>
          <div className='ms-5'>
            <span><i class="fa-solid fa-location-dot text-red-500"></i></span>
            <span> Find Store</span>
          </div>
        </div>
      </div> */}


      <div className='btn-red  pl-2 mt-5 ms-60 flex items-center justify-between '>
        <div>
          <div class="dropdown">
            <button class="dropbtn" className='text-sm hover:text-rose-600'>
              Home
              <i class="fa-solid fa-angle-down ml-1"></i>
            </button>
            <div class="dropdown-content">
              <ul>
                <li><a href="#" className='hover:text-rose-600'>Wooden Home</a></li>
                <li><a href="#" className='hover:text-rose-600'>Fashion Home</a></li>
                <li><a href="#" className='hover:text-rose-600'>Furniture Home</a></li>
                <li><a href="#" className='hover:text-rose-600'>Cosmetics Home</a></li>
                <li><a href="#" className='hover:text-rose-600'>Food Grocery</a></li>
              </ul>
            </div>
          </div>

          <div class="dropdown pl-3">
            <button class="dropbtn" className='text-sm hover:text-rose-600'>
              Shop
              <i class="fa-solid fa-angle-down ml-1"></i>
            </button>
            <div class="dropdown-content">
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

          <div class="dropdown pl-3">
            <button class="dropbtn" className='text-sm hover:text-rose-600'>
              Pages
              <i class="fa-solid fa-angle-down ml-1"></i>
            </button>
            <div class="dropdown-content flex flex-wrap">
              <ul className='w-[200px]'>
                <li ><a href="" className='hover:text-rose-600'>Shope Filters V1</a></li>
                <li><a href="" className='hover:text-rose-600'>Shope Filters V2</a></li>
                <li><a href="" className='hover:text-rose-600'>Shope sidebar</a></li>
                <li><a href="" className='hover:text-rose-600'>Shope Right  sidebar</a></li>
                <li><a href="" className='hover:text-rose-600'>Shope List View</a></li>
                <li><a href="" className='hover:text-rose-600'></a></li>
              </ul>
              <ul className='w-[200px]' >
                <li ><a href="" className='hover:text-rose-600'>PAGE LAYOUT</a></li>
                <li><a href="" className='hover:text-rose-600'>About</a></li>
                <li><a href="" className='hover:text-rose-600'>Cart</a></li>
                <li><a href="" className='hover:text-rose-600'>Checkout</a></li>
                <li><a href="" className='hover:text-rose-600'>Sign In</a></li>
                <li><a href="" className='hover:text-rose-600'>Log In</a></li>
              </ul>
              <ul className='w-[200px]'>
                <li ><a href="" className='hover:text-rose-600'>PAGE TYPE</a></li>
                <li><a href="" className='hover:text-rose-600'>Product Track</a></li>
                <li><a href="" className='hover:text-rose-600'>Wishlist</a></li>
                <li><a href="" className='hover:text-rose-600'>404 / Error</a></li>
                <li><a href="" className='hover:text-rose-600'>Coming Soon</a></li>
              </ul>

            </div>
          </div>

          <div class="dropdown pl-3">
            <button class="dropbtn" className='text-sm hover:text-rose-600'
            >Blog <i class="fa-solid fa-angle-down ml-1"></i>
            </button>
            <div class="dropdown-content">
              <ul>
                <li><a href="" className='hover:text-rose-600'>Blog</a></li>
                <li><a href="" className='hover:text-rose-600'>Blog Details</a></li>
              </ul>
            </div>
          </div>
          <div class="dropdown pl-2">
            <button class="dropbtn" className='text-sm hover:text-rose-600' >
              Contact</button>
          </div>

        </div>




        <div className='home-bar2  pl-5 flex '>

          <div className='header-call flex'>
            <a href="#" className='text-rose-600 hover:text-rose-600 '><i class="fa-solid fa-phone-flip"></i></a>
            <p className='font-bold pl-2 hover:text-rose-600'>908.569.267.008</p>
          </div>

          <div className='header-map flex pl-2'>
            <a href="#" className='text-rose-600'><i class="fa-solid fa-location-dot"></i></a>
            <p className='font-bold pl-2 text-sm  hover:text-rose-600'>Find Store</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
