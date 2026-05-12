import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faArrowLeftLong,faCircle, faArrowRightLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const authpPage = () => {

const location = useLocation()
  const[isLogin,setisLogin ] = useState(
      location.state?.mode === "register" ? false : true
  )

  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showRegPassword, setShowRegPassword] = useState(false)
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false)

  return (
    <> 
    {/* Navigation  */}
  
      <nav className=' font-sans px-5 pt-10 lg:p-10  bg-[#f8f9fc] flex justify-between'>
  
              {/* Left */}
                  <div className='font-bold text-xl md:text-2xl  '>
                    <span >  <FontAwesomeIcon  icon={faUsers}     style={{color: "rgb(6, 145, 255)",}} /></span>
                      EMS
                      <div className='font-semibold text-sm md:text-xl  ms-8'>Employee Management System</div>
                  </div>
  
                  {/* Right */}
  
                <div className='flex gap-10 items-center '>
                 
                <div className='text-green-800 font-medium hidden lg:flex  gap-2 '>
                <FontAwesomeIcon className='animate-pulse duration-300 mt-1 ' icon={faCircle} style={{color: "rgb(green)",}} />
                   <span>14-Days free Trial</span>
                </div>
             
                 <Link to="/" className='flex gap-2 cursor-pointer font-bold'> 
                   <span><FontAwesomeIcon icon={faArrowLeftLong} style={{color: "rgb(black)",}} /></span>
                   Back to Home
                  </Link>
                  
                  </div>
      </nav>
  
       {/* aAuthentication*/}

<div className='flex justify-center overflow-hidden  px-4 py-10 '>
  
        <div className='inline-block  relative w-full max-w-6xl  bg-[#f8f9fc]  rounded-2xl shadow-2xl overflow-hidden'>

          {/* MOBILE TAB SWITCHER - only visible on mobile */}
          <div className='lg:hidden flex m-4 rounded-xl overflow-hidden border border-gray-200'>
            <button
              onClick={() => setisLogin(true)}
              className={"flex-1 py-3 text-sm font-bold transition-all duration-300 " + (isLogin ? 'bg-blue-600 text-white' : 'bg-white text-gray-500')}
            >
              Login
            </button>
            <button
              onClick={() => setisLogin(false)}
              className={"flex-1 py-3 text-sm font-bold transition-all duration-300 " + (!isLogin ? 'bg-blue-600 text-white' : 'bg-white text-gray-500')}
            >
              Register
            </button>
          </div>

 {/* login side */}

 <div className='grid grid-cols-1 lg:grid-cols-2   '> 
 
    
          <div className={"leading-8  lg:p-20 lg:pt-10 " + (isLogin ? "transalte-x-0 opacity-100": " opacity-0 translate-x-20 hidden lg:block ")}>
             <div className='text-4xl font-bold p-10  text-center '> 
            LOGIN
              </div>

              <div className='px-20 flex  gap-3 mb-5'>
              <div className='bg-white rounded-2xl border p-3 cursor-pointer'> <FontAwesomeIcon icon={faGoogle} size='2x'  style={{color: "black",}} /></div>
              <div className='bg-white rounded-2xl border p-3 cursor-pointer'>  <FontAwesomeIcon icon={faGithub} size='2x' style={{color: "black)",}} /></div>
              <div className='bg-white rounded-2xl border p-3 cursor-pointer'> <FontAwesomeIcon icon={faLinkedin} size='2x' style={{color: "black)",}} /></div>
              </div>

              <div className=' text-center mb-4 font-medium text-gray-600'>
                  or use your email and password
              </div>
      
              <form className=' flex  m-4  mb-3 justify-center flex-col gap-4 leading-relaxed '>
      
                 <input className='w-full p-4 bg-white rounded-2xl' type="text" placeholder='Email' />
                
                <div className='relative w-full'>
                  <input className='w-full bg-white rounded-2xl p-4 pr-12' type={showLoginPassword ? "text" : "password"} placeholder='Password' />
                  <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'>
                    <FontAwesomeIcon icon={showLoginPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              
                </form>
      
                <div className=' text-center m-4 inline-block font-medium cursor-pointer relative  group '>
                  
                  Forgot Your Password?
                  
                  
                </div>
                 <Link to="/dashboard">
                   <button className='mt-5 mx-4 lg:ms-20 w-[calc(100%-2rem)] lg:w-auto bg-blue-700 rounded-3xl hover:bg-blue-600 p-4 lg:mb-0 flex justify-center lg:justify-start cursor-pointer text-white text-l font-bold gap-2 mb-10' >
                Login  Account
                 <span><FontAwesomeIcon icon={faArrowRightLong} style={{color: "rgb(black)",}} /></span>
                </button>
                 </Link>
           
             
          </div>

          {/* Register Area */}

      
          <div className={"leading-8  lg:p-20 lg:pt-10 " + (!isLogin ? "transalte-x-0 opacity-100": " opacity-0 translate-x-20 hidden lg:block ")}>
             <div className='text-4xl font-bold p-10  text-center  '> 
            Create An Account
              </div>

              <div className='px-20 flex  gap-3 mb-5'>
              <div className='bg-white rounded-2xl border p-3 cursor-pointer'> <FontAwesomeIcon icon={faGoogle} size='2x'  style={{color: "black",}} /></div>
              <div className='bg-white rounded-2xl border p-3 cursor-pointer'>  <FontAwesomeIcon icon={faGithub} size='2x' style={{color: "black)",}} /></div>
              <div className='bg-white rounded-2xl border p-3 cursor-pointer'> <FontAwesomeIcon icon={faLinkedin} size='2x' style={{color: "black)",}} /></div>
              </div>

              <div className=' text-center mb-4 font-medium text-gray-600'>
              Create your account to get started
              </div>
      
              <form className=' flex  m-4  mb-3 justify-center flex-col gap-4 leading-relaxed '>

                
                 <input className='w-full p-3 bg-white rounded-2xl' type="text" placeholder='Email' />

                <div className='relative w-full'>
                  <input className='w-full bg-white rounded-2xl p-3 pr-12' type={showRegPassword ? "text" : "password"} placeholder='Password' />
                  <button type="button" onClick={() => setShowRegPassword(!showRegPassword)} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'>
                    <FontAwesomeIcon icon={showRegPassword ? faEyeSlash : faEye} />
                  </button>
                </div>

                <div className='relative w-full'>
                  <input className='w-full bg-white rounded-2xl p-3 pr-12' type={showRegConfirmPassword ? "text" : "password"} placeholder='Confirm Your Password' />
                  <button type="button" onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer'>
                    <FontAwesomeIcon icon={showRegConfirmPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              
                </form>
      
                <div className=' text-center m-4 inline-block font-medium cursor-pointer relative  group '>
                  
                
                  
                  
                </div>
               <Link to="/dashboard">
                   <button className='mt-5 mx-4 lg:ms-20 w-[calc(100%-2rem)] lg:w-auto bg-blue-700 rounded-3xl hover:bg-blue-600 p-4 lg:mb-0 flex justify-center lg:justify-start cursor-pointer text-white text-l font-bold mb-10 gap-2' >
                Create Account
                 <span><FontAwesomeIcon icon={faArrowRightLong} style={{color: "rgb(black)",}} /></span>
                </button>
               </Link>
              
             
          </div>


          <div className={"absolute top-0 h-full w-1/2   hidden lg:flex flex-col justify-center items-center text-center bg-blue-600 p-10 z-20  tranasition-all duration-700 ease-in-out  " + (isLogin ? 'left-1/2 rounded-l-[160px]':'left-0 rounded-r-[160px]')}>
          <div className='text-5xl text-white font-bold leading-tight mb-8'>
            {isLogin ?(
              <>
              Welcome Back to your workplace
              </>
            ):
          (
            <>
            Join Your <br />
            Workplace Today
            </>
          )
          }
          </div>
          <div className='text-xl text-white font-medium leading-tight mb-8'>
            {isLogin ?(
              <>
              Manage employees, track attendance and boost productivity - all in one place
              </>
            ):
          (
            <>
          Create your account and start managing your employees smarter and faster
            </>
          )
          }
          </div>
          <button onClick={()=> setisLogin(!isLogin)}
            className='px-8 py-4 border-2 border-white roudned-2xl text-white font-bold hover:bg-blue-500 '>
             { isLogin ? 'Create An Account':'Login To Your Account'}

          </button>
            
          

          </div>
         


 </div>

 
  
        </div>
  
    
</div>
  

    </>
     
  )
}

export default authpPage