import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Head from '../Header/Head'
import Nav from '../Nav/Nav'
import PageHeading from '../PageHeading/PageHeading';
import Fotter from '../Fotter/Fotter'
import Sign from '../Assate/sign-bg.jpg'
import Login from '../Assate/login-bg.jpg'
import swal from 'sweetalert'



const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("")

  const getEmail = localStorage.getItem("Email");
  const getPw = localStorage.getItem("Password");

  function onSubmitFun(e) {
    e.preventDefault();  //interview
    if (!email && !pw) {
      alert("plz fill all field")
    } else {
      alert("succesfully register user")
      localStorage.setItem("Email", email);
      localStorage.setItem("password", pw)
      navigate("/")
    }
  }

  function onSubmitLogin(e) {
    e.preventDefault();
    if (!email && !pw) {
      alert("plz fill all field")
    } else if (email !== getEmail && pw !== getPw) {
      alert("plz fill currect details")
    }
    else {
      alert("succesfully login user")
    }
  }


  return (

    <>
      <Head />
      <Nav />
      <PageHeading name="register" />



      <div className='flex justify-evenly mb-5'>
        <form onSubmit={onSubmitLogin}>
          <div className="h-[750px] bg-[#F6F6F6] rounded ">
            <div className=' rounded-t-lg relative' >
              <img src={Login} className='rounded-t-lg' alt="" />
            </div>
            <div className='pt-10 ps-10 flex' >
              <div>
                <span className='h-auto w-auto rounded bg-white'><i class="fa-solid fa-bag-shopping text-3xl text-rose-500"></i></span>
              </div>
              <div>
                <div className='ms-2'>
                  <h3 className='font-bold  '>Login Here</h3>
                  <p className='text-[0.9rem] leading-6 mt-2 text-gray-500 w-[35vw]' >Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                </div>
                <div className=' bg-white py-1 mt-5 rounded flex -ms-12' >
                  {/* <LuUser2 className='m-4 me-0 text-gray-500 ' /> */}
                  <input type="text" onChange={(e) => setEmail(e.target.value)} className='px-2 pe-72 py-3 focus:border-none ' placeholder='Username/email address' />
                </div>
                <div className=' bg-white py-1 mt-3 rounded flex -ms-12' >
                  {/* <GoKey className='m-4 me-0 text-gray-500 ' /> */}
                  <input type="text" onChange={(e) => setPw(e.target.value)} className='px-2 pe-72 py-3 focus:border-none ' placeholder='Password' />
                </div>
                <div className="flex mt-5 justify-between -ms-12 n-check">
                  <div className='' >
                    <input type="checkbox" className='h-3 w-3' id='check' />
                    <label htmlFor="check" className='ms-2 text-sm text-gray-500'>Remember me</label>
                  </div>
                  <a href="" className='underline text-[0.75rem] mt-2' >Forget password</a>
                </div>
                <div className=' bg-[#d51243] py-4 text-white rounded mt-5 flex -ms-12 hover:bg-[#b1101a]
                                hover:transition-all hover:duration-500 hover:ease-in-out
                            justify-center cursor-pointer' >
                  <button type='submit'>Login Now </button>
                </div>
              </div>
            </div>
          </div>
        </form>



        <div className="flex xl:flex-nowrap justify-center xl:justify-between mb-10 flex-wrap mx-10 mt-20"></div>
        {/* ********************************** */}
        <form onSubmit={onSubmitFun} >
          <div className="h-[750px] bg-[#F6F6F6] rounded md:mt-10 lg:mt-0 ">
            <div className=' rounded-t-lg relative' >
              <img src={Sign} className='rounded-t-lg' alt="" />
            </div>
            <div className='pt-10 ps-10 flex' >
              <div>
                <span className='h-auto w-auto rounded bg-white'><i class="fa-solid fa-suitcase text-3xl text-rose-500"></i></span>
              </div>
              <div>
                <div className='ms-2'>
                  <h3 className='font-bold  '>Sign Up</h3>
                  <p className='text-[0.9rem] leading-6 mt-2 text-gray-500 w-[35vw]' >Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                </div>
                <div className=' bg-white py-1 mt-5 rounded flex -ms-12 ' >
                  {/* <CiMail className='m-4 me-0 ' /> */}
                  <input type="text" onChange={(e) => setEmail(e.target.value)} className='px-2 pe-72 py-3 focus:border-none ' placeholder='Username/email address' />
                </div>
                <div className=' bg-white py-1 mt-3 rounded flex -ms-12' >
                  {/* <GoKey className='m-4 me-0 text-gray-500 ' /> */}
                  <input type="password" onChange={(e) => setPw(e.target.value)} className='px-2 pe-72 py-3 focus:border-none ' placeholder='Password' />
                </div>
                <div className="flex mt-5 justify-between -ms-12 n-check">
                  <a href="" className='underline text-[0.75rem] mt-2' >Already Have Account?</a>
                </div>
                <div className=' bg-[#F3EEE7] py-4  rounded mt-5 flex -ms-12 hover:bg-[black] hover:text-white
                                      hover:transition-all hover:duration-500 hover:ease-in-out justify-center'>
                  <button type='submit'>Login Now </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Fotter />
    </>
  )
}

export default Register
