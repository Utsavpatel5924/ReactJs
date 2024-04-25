import React from 'react'
import './Head.css'
import img from '../Assate/logo.png'
import img1 from '../Assate/flag.png'

const Head = () => {
  return (
    <div>
      <header>

        <div className='flex justify-around flex-wrap'>
          <img src={img} alt="" />
          <div className=' bg-slate-200 rounded-lg '>
            <i class="fa-solid fa-magnifying-glass ms-3 me-3"></i>
            <input type="search" placeholder='Search Product' className='bg-slate-200 border-2 ms-2  h-10 min-w-[600px]' name="Search" id="" />
          </div>
          <div className='flex '>
            <div className='flex border-2 border-black' id='eng'>
              <img src={img1} alt="" />
              <select name="Language" id="Language" className='outline-none'>
                <option value="">English</option>
                <option value="">Arabic</option>
                <option value="">Spanish</option>
                <option value="">Mandarin</option>
              </select>
            </div>
            <div className='border-2 border-black ms-2 flex border-rounded-md'>
              <select name="Language" id="Language">
                <option value="">USD</option>
                <option value="">YEAN</option>
                <option value="">EURO</option>
              </select>
            </div>
          </div>
          <div className='flex items-center'>
            <div className=' position-relative'>
           
            </div>
            <i class="fa-regular fa-user ms-3 "></i>
            <i class="fa-regular fa-heart ms-3 "></i>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Head
