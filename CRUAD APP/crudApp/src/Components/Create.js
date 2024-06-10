import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Create() {
  const navigat= useNavigate();
  const [student,setStudent]=useState({
    id:"",
    First:"",
    Last:"",
    Age:"",
    City:""
  })


  const onSubmitStudent =(e)=>{
    e.preventDefault();
    // console.log(student);
    axios.post("http://localhost:3001/table",student)
    navigat("/")
  }
  
  return (
    <section className="rounded-md  p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2">
           <h1 className='text-5xl font-bold'>Add Student</h1>
          </div>
          
          <form  onSubmit={onSubmitStudent} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  
                  ID
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder=" Id"
                    id="name"
                    name='id'
                    onChange={(e)=>setStudent({...student,id :e.target.value})}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="First Name"
                    id="name"
                    name='First'
                    onChange={(e)=>setStudent({...student,First :e.target.value})}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Last Name"
                    id="name"
                    name='Last'
                    onChange={(e)=>setStudent({...student,Last :e.target.value})}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="age" className="text-base font-medium text-gray-900">
                  
                  age 
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    defaultValue={17}
                    placeholder="age"
                    id="age"
                    name='Age'
                    onChange={(e)=>setStudent({...student,Age :e.target.value})}
                  ></input>
                </div>
              </div>
              
                <div>
                  <label htmlFor="city" className="text-base font-medium text-gray-900">
                    
                    city
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="city"
                    placeholder="city"
                    id="city"
                    name='City'
                    onChange={(e)=>setStudent({...student,City :e.target.value})}
                  ></input>
                </div>
              
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                 
               >
                  Add student <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  )
}
