import React from 'react'
import Head from '../Header/Head'
import Nav from '../Nav/Nav'
import PageHeading from '../PageHeading/PageHeading'
import Fotter from '../Fotter/Fotter'
import img1 from '../Assate/about-img-1.jpg'
import img2 from '../Assate/about-img-2.jpg'
import img3 from '../Assate/about-img-3.png'


export default function About() {
  return (
    <>
      <Head />
      <Nav />
      <PageHeading name='About Us' />
      <div className='relative'>
        <div className='flex  justify-center'>
          <img src={img1} alt="" className='h-[400px] w-[500px]' />
          <img src={img2} alt="" className='h-[400px] ms-5 w-[500px]' />
        </div>
        <div className='flex   absolute left-[410px] bottom-0'>
          <img src={img3} alt="" className='h-[100px] w-[450px]' />
        </div>

      </div>

      <div>
        <h1 className='text-start text-gray-300 ms-2'>About Us</h1>
        <h1 className='text-start text-4xl font-bold ms-2'>About  Our Story</h1>
        <div className='flex justify-evenly text-start'>
          <div className='w-[500px] p-3'> Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering. </div>
          <div className='w-[500px] p-3'> Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information </div>
          <div className='w-[400px] p-5'>
            <div><i class="fa-solid fa-check"></i>Orders go right to your restaurant point of sale, KDS, and kitchen</div>
            <div><i class="fa-solid fa-check"></i>Provide in-person pickup, delivery by professional couriers
            </div>
            <div><i class="fa-solid fa-check"></i>Offer in-person diners self-serve, contactless ordering via QR codes.</div>
          </div>
        </div>
      </div>
      <div>
        <div>
            <h1 className='text-gray-500'>Team</h1>
            <h1 className='text-4xl font-bold'>Meet With Team</h1>
        </div>
      </div>
      <Fotter />
    </>
  )
}
