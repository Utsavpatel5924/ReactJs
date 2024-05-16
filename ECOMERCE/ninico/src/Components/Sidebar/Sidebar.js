import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Sidebar.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import baner from '../Assate/banner-1.jpg'
import baner1 from '../Assate/banner-2.jpg'
import baner2 from '../Assate/banner-3.jpg'
import banerSide from '../Assate/banner-slider-01.jpg'
import banerSide1 from '../Assate/banner-slider-02.jpg'


function Sidebar() {
  return (
    <div className='flex  Swiper container '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide relative h-full">
            <img
              src={baner}
              alt="slid-1"
              className="min-h-[inherit]"
            />

            <div className="slide-text flex flex-col justify-center absolute">
              <p>Accessories</p>

              <h1>
                Up To
                <span>45% Off</span>
                latest Creations
              </h1>

              <a
                href="#"
                id="shopLink"
                className="flex items-center justify-center"
              >
                Shop Now
                <i className="fa-solid fa-arrow-right block ml-3"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide relative h-full">
            <img
              src={baner1}
              alt="slid-1"
              className="min-h-[inherit]"
            />

            <div className="slide-text flex flex-col justify-center absolute">
              <p>Accessories</p>

              <h1>
                Up To
                <span>45% Off</span>
                latest Creations
              </h1>

              <a
                href="#"
                id="shopLink"
                className="flex items-center justify-center"
              >
                Shop Now
                <i className="fa-solid fa-arrow-right block ml-3"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide relative h-full">
            <img
              src={baner2}
              alt="slid-1"
              className="min-h-[inherit]"
            />

            <div className="slide-text flex flex-col justify-center absolute">
              <p>Accessories</p>

              <h1>
                Up To
                <span>45% Off</span>
                latest Creations
              </h1>

              <a
                href="#"
                id="shopLink"
                className="flex items-center justify-center"
              >
                Shop Now
                <i className="fa-solid fa-arrow-right block ml-3"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      {/* <div>
                <img src={baner} alt="" className='rounded-lg'/>
            </div> */}
      <div className="side-images max-w-[28%] flex flex-col items-center justify-between">
        <a href="" className="block banner banner-1 relative">
          <img src={banerSide} alt="Hand Mande" />
          <div className="Img-text absolute">
            <h3>Hand made</h3>
            <h1>New Modern stylist Craft</h1>
          </div>
        </a>

        <a href="" className="block banner banner-2 relative">
          <img src={banerSide1} alt="Popular" />
          <div className="Img-text absolute">
            <h3>Popular</h3>
            <h1>Energy with our newest collection</h1>
          </div>
        </a>
      </div>
    </div>



  )
}

export default Sidebar
