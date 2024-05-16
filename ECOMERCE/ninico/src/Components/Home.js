import React from 'react'
import Head from './Header/Head'
import Catagories from './Catagories/Catagories'
import Nav from './Nav/Nav'
import Sidebar from './Sidebar/Sidebar'
import TopCatagories from './TopCatagories/TopCatagories'
import PopularProducts from './PopulerProduct/PopulerProduct'
import Timerpage from './Timerpage/Timerpage'
import Fotter from './Fotter/Fotter'
import FollowOn from './FollowOn/FollowOn'

const Home = () => {
  return (
    <div>
      <Head className='mt-3'/>
      
        {/* <Catagories/> */}
        <Nav />
      <Sidebar/> 
      <TopCatagories/>
      <PopularProducts/>
      <Timerpage/>
      <FollowOn/>
      <Fotter />
    </div>
  )
}

export default Home
