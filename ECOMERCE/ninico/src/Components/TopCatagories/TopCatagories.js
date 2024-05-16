import React from 'react'
import img1 from '../Assate/cat01.svg'
import img2 from '../Assate/cat02.svg'
import img3 from '../Assate/cat03.svg'
import img4 from '../Assate/cat04.svg'
import img5 from '../Assate/cat05.svg'
import img6 from '../Assate/cat06.svg'


const TopCatagories = () => {
  return (
    <div>
      <h1 className='text-xl font-bold text-red-500 text-start'>Top Categories</h1>
      <div>
        <div className='flex justify-between mt-5'>
          <div  >
            <div className='bg-gray-200 min-h-36 min-w-36 flex justify-center items-center rounded-full relative'>
              <img src={img1} alt=" "  />
              <span className= 'absolute bg-white rounded-full top-0 right-0 text-red-400 h-10 w-10 flex justify-center items-center shadow-lg'  >20</span>
            </div>
            <pre className='mt-10'>Driftwood <br />Table Decor</pre>
          </div>
          <div  >
            <div className='bg-gray-200 min-h-36 min-w-36 flex justify-center items-center rounded-full relative'>
              <img src={img2} alt=" "  />
              <span className= 'absolute bg-white rounded-full top-0 right-0 text-red-400 h-10 w-10 flex justify-center items-center shadow-lg'  >12</span>
            </div>
            <pre className='mt-10'>  Floor Driftwood <br />Sculpture</pre>
          </div>
          <div  >
            <div className= 'topCatagoris bg-gray-200 min-h-36 min-w-36 flex justify-center items-center rounded-full relative'>
              <img src={img3} alt=" "  />
              <span className=  '  absolute bg-white  rounded-full top-0 right-0 text-red-400 h-10 w-10 flex justify-center items-center shadow-lg'  >03</span>
            </div>
            <pre className='mt-10'>  Driftwood <br />Christmas Tree </pre>
          </div>
          <div  >
            <div className='bg-gray-200 min-h-36 min-w-36 flex justify-center items-center rounded-full relative'>
              <img src={img4} alt=" "  />
              <span className= 'absolute bg-white rounded-full top-0 right-0 text-red-400 h-10 w-10 flex justify-center items-center shadow-lg'  >09</span>
            </div>
            <pre className='mt-10'>Wooden<br />Bluetooth Speaker</pre>
          </div>
          <div  >
            <div className='bg-gray-200 min-h-36 min-w-36 flex justify-center items-center rounded-full relative'>
              <img src={img5} alt=" "  />
              <span className= 'absolute bg-white rounded-full top-0 right-0 text-red-400 h-10 w-10 flex justify-center items-center shadow-lg'  >10</span>
            </div>
            <pre className='mt-10'>Receivers <br />Amplifiers</pre>
          </div>
          <div  >
            <div className='bg-gray-200 min-h-36 min-w-36 flex justify-center items-center rounded-full relative'>
              <img src={img6} alt=" "  />
              <span className= 'absolute bg-white rounded-full top-0 right-0 text-red-400 h-10 w-10 flex justify-center items-center shadow-lg'  >05</span>
            </div>
            <pre className='mt-10'>Appetizer<br />Plate Set </pre>
          </div>
          
          
        </div>

      </div>

    </div>
  )
}

export default TopCatagories
