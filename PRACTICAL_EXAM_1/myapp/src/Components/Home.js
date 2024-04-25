import React from 'react'
import Data from './Data'
import Card from './Card'

const Home = () => {
  return (
    <div>

    <div className='flex justify-between'>
      { 
        Data.map((cvalue,ind,arr)=>{
            console.log(cvalue,"Cvalue")
            return  <Card  key={ind}  name={cvalue.name} id={cvalue.id} age={cvalue.age} img={cvalue.img} />

        })
      }
    </div>
    </div>
  )
}

export default Home
