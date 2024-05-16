import React from 'react'
import PageHead from '../Assate/Heading.jpg'


const PageHeading = (props) => {
  return (
    <div>
      <div className="Error-Head relative mb-5">
        <img src={PageHead} alt="Error-img" className="block mx-auto object-contain " />
        <h1 className="absolute text-4xl font-bold top-5 left-5">
            <p className='text-sm'>Home---- {props.name}</p>
          <h2>{props.name} </h2>
        </h1>
      </div>
    </div>
  )
}

export default PageHeading
