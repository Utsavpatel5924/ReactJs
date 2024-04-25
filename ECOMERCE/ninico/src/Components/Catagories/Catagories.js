import React from 'react'
import './Catagories.css'

const Catagories = () => {
  return (
    <div>
      <div className='Catagories mt-5 h-fu'>
        <div className='bg-red-500 h-10 w-44 text-center text-white rounded-t-lg'><i class="fa-solid fa-bars"></i> Categories</div>
        <ul className='text-start'>
          <li className=' h-10 w-44 bg-gray-50 text-sm'><i class="me-3 ms-3 fa-solid fa-user text-red-500"></i>Candles</li>
          <li className=' h-10 w-44 bg-gray-50 text-sm'><i class="me-3 ms-3 fa-solid fa-hands-holding-circle text-red-500"></i>Handmade</li>
          <li className=' h-10 w-44 bg-gray-50 text-sm'><i class="me-3 ms-3 fa-solid fa-shoe-prints text-red-500"></i>Gift Sets</li>
          <li className=' h-10 w-44 bg-gray-50 text-sm'><i class="me-3 ms-3 fa-regular fa-face-smile text-red-500"></i>Plastic Gifts</li>
          <li className=' h-10 w-44 bg-gray-50 text-sm'><i class="me-3 ms-3 fa-regular fa-futbol text-red-500"></i>Handy Cream</li>
          <li className=' h-10 w-44 bg-gray-50 text-sm'><i class="me-3 ms-3 fa-brands fa-web-awesome text-red-500"></i>Cosmetics</li>
          <li className=' h-10 w-44 bg-gray-50 text-sm'><i class="me-3 ms-3 fa-solid fa-gift text-red-500"></i>Silk Accessorieso</li>
        </ul>
        <p className='bg-gray-200 rounded-b-lg'>Value of the Day <br />
          Top 100 Offers <br />
          New Arrivals</p>
      </div>
    </div>
  )
}

export default Catagories
