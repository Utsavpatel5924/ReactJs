import React, { useState } from 'react'
import './Catagories.css'

const Catagories = () => {
  
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <div className='container ps-7 mt-5'>
        <div className="main-c " tabIndex="0" onClick={toggleMenu}>
          <div className="flex ps-5 pt-3 cursor-pointer ">
            <i className="fa-solid fa-bars pe-3 pt-1" style={{ color: "#ffffff" }}></i>
            <b>Categories</b>
          </div>
        </div>
        <div className={` text-center category-menu border ${menuVisible ? 'category-menu-off' : 'category-menu-on'}`}>
          <ul className='text-start'>
            <li className=' h-10 w-44 bg-gray-50 text-sm'><i className="me-3 ms-3 fa-solid fa-user text-red-500"></i>Candles</li>
            <li className=' h-10 w-44 bg-gray-50 text-sm'><i className="me-3 ms-3 fa-solid fa-hands-holding-circle text-red-500"></i>Handmade</li>
            <li className=' h-10 w-44 bg-gray-50 text-sm'><i className="me-3 ms-3 fa-solid fa-shoe-prints text-red-500"></i>Gift Sets</li>
            <li className=' h-10 w-44 bg-gray-50 text-sm'><i className="me-3 ms-3 fa-regular fa-face-smile text-red-500"></i>Plastic Gifts</li>
            <li className=' h-10 w-44 bg-gray-50 text-sm'><i className="me-3 ms-3 fa-regular fa-futbol text-red-500"></i>Handy Cream</li>
            <li className=' h-10 w-44 bg-gray-50 text-sm'><i className="me-3 ms-3 fa-brands fa-web-awesome text-red-500"></i>Cosmetics</li>
            <li className=' h-10 w-44 bg-gray-50 text-sm'><i className="me-3 ms-3 fa-solid fa-gift text-red-500"></i>Silk Accessorieso</li>
          </ul>
          <div className='links text-start'>
            <a href=""><b className='mt-3 ms-5 absolute '>Value of the day</b></a>
            <a href=""><b className='mt-10 ms-5 absolute '>Top 100 Offers </b></a>
            <a href=""><b className='ms-5 absolute' style={{ marginTop: "67px" }}>New Arrivals</b></a>
          </div>

        </div>
      </div >

    </>
  )
}

export default Catagories
