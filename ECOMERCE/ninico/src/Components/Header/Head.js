import React from 'react'
import './Head.css'
import { Link,useNavigate } from 'react-router-dom'
import img from '../Assate/logo.png'
import img1 from '../Assate/flag.png'
import {state} from "../../Redux/Reduser/Reduser"


import{useSelector} from 'react-redux'

const Head = () => {
  const data = useSelector((state)=>state.Creatreduser.carts)
  const data2= useSelector((state)=>state.Wishlist.Wishlistitem)
  console.log(data,"data")
 const navigate=useNavigate();
  return (

    <div>
      <header>

        <div className='flex justify-around flex-wrap'>
          <img src={img} alt="" />
          <div className=' bg-slate-200 rounded-lg '>
            <i className="fa-solid fa-magnifying-glass ms-3 me-3"></i>
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
            <div className='relative '>
              <div className='h-4 w-4 bg-rose-500 rounded-full text-xs text-white flex justify-center items-center  left-0  '>{data.length}</div>
              <i className="fa-solid fa-cart-shopping ms-3 text-lg" onClick={()=>navigate("/cart")}></i>
            </div>
            <i className="fa-regular fa-user items-center ms-3 " onClick={()=>navigate("/contact")}></i>
            <div className='relative '>
              <div className='h-4 w-4 bg-rose-500 rounded-full text-white  flex justify-center items-center text-xs  left-0 '>{data2.length}</div>
              <i className="fa-regular fa-heart ms-3 text-lg" onClick={()=>navigate("/wishlist")}></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Head
