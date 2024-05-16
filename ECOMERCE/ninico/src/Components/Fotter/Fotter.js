import React from 'react'
import img from '../Assate/logo.png'
import img1 from '../Assate/app-store apple.jpg'
import img2 from '../Assate/amazon.png'
import img3 from '../Assate/logo-google.png'
import img5 from '../Assate/Playstore.jpg'
import img6 from '../Assate/behance-logo.png'
import RightArrow from "../Assate/arrow-right-solid.svg";

import './Fotter.css'

const Fotter = () => {
    return (<>
        <div className='container mt-10' id='bg-color'>
            <div className='flex justify-between flex-wrap ms-5'>
                <div className='text-start  '>
                    <img src={img} alt="" className='mb-10'/>
                    <span className='mt-10' >Elegant pink origami design three <br />
                        dimensional view and decoration co-exist. <br />
                        Great for adding a decorative touch to <br />
                        any room's decor</span>
                </div>
                <div className='text-start '>
                    <h1 className='text-xl underline mb-10'>Information</h1>
                    <p>Custom Service</p>
                    <p>FAQs</p>
                    <p>Ordering Tracking</p>
                    <p>Contacts</p>
                    <p>Events</p>
                </div>
                <div className='text-start '>
                    <h1 className='text-xl underline mb-10'>My Account</h1>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Discount</p>
                    <p>Custom Service</p>
                    <p>Terms Condition</p>
                </div>
                <div className='text-start ' >
                    <h1 className='text-xl underline mb-10'>Social Network</h1>
                    <p><i className="me-3 fa-brands fa-facebook-f"></i>Facebook</p>
                    <p><i className="me-2 fa-brands fa-dribbble"></i>Dribbble</p>
                    <p><i className="me-2 fa-brands fa-twitter"></i>Twitter</p>
                    <p><i className="me-2 fa-brands fa-behance"></i>Behance</p>
                    <p><i className="me-2 fa-brands fa-youtube"></i>Youtube</p>
                </div>
                <div className='text-start '>
                    <h1 className='text-xl underline mb-10 '>Get Newsletter</h1>
                    <span>Get on the list and get 10% off your first <br /> order!</span><br />
                    <input type="email" placeholder='Enter email adderes' className='h-10 w-60' name="" id="email" /><br />
                    <button className="bg-[#D51243] form-button flex items-center my-2 justify-evenly text-[#FFFFFF] font-bold text-[1.1rem] min-w-[185px] min-h-[55px] px-2 rounded-[5px]">
                            Subscribe Now <span className="icons"><img src={RightArrow} alt="Right Arrow" /></span>
                        </button>
                </div>
            </div>
            <hr className='mt-10 '/>
            <div className='flex justify-between mt-10 ms-5'>
                <div className='flex'>
                    <span className='h-10 w-10 bg-white rounded-full '><i className="fa-solid fa-phone my-3"></i></span>
                    <div>
                        <p className="font-bold">980. 029. 666. 99</p>
                        <span className='text-sm'> Working 8:00 - 22:00</span>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <span className="font-bold">Download App on Mobile</span><br />
                        <span className='text-sm'> 15% discount on your first purchase</span>
                    </div>
                    <div className='flex'>
                        <img src={img5} alt="" className='h-10 w-20' />
                        <img src={img1} alt="" className='h-10 w-20' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-10  bg-gray-200 '>
                <div>
                    <p>Copyright 2024 ©Ninico. All rights reserved. Developed by AliThemes.</p>
                </div>
                <div className='flex justify-between'>
                    <img src={img2} alt="" className='h-10 w-20' />
                    <img src={img3} alt="" className='h-10 w-20 ms-2' />
                    <img src={img6} alt="" className='h-10 w-20 ms-2' />
                </div>
            </div>
        </div>
    </>
    )
}

export default Fotter
