import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faArrowLeftLong,faCircle, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const authpPage = () => {
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
  
                <div className='flex  gap-10 items-center '>
                 
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

<div className='flex justify-center  px-4 py-10 '>
  
        <div className='inline-block w-full max-w-6xl  bg-[#f8f9fc]  rounded-2xl shadow-2xl overflow-hidden'>

 <div className='grid grid-cols-1 lg:grid-cols-2  '> 
  {/* login side */}
    
          <div className=' leading-8  lg:p-20 lg:pt-10 '>
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
      
              <form className=' flex  mb-3 justify-center flex-col gap-4 leading-relaxed '>
      
                 <input className='w-full p-4 bg-white rounded-2xl' type="text" placeholder='Email' />
                <input className='w-full bg-white rounded-2xl p-4' type="text" placeholder='Password' />
              
                </form>
      
                <div className=' text-center inline-block font-medium cursor-pointer relative  group '>
                  
                  Forgot Your Password?
                  
                  
                </div>
                 <button className='  mt-5  ms-30 bg-blue-700 rounded-3xl hover:bg-blue-600 p-4 lg:mb-0 flex  cursor-pointer text-white  text-l font-bold' >
              Login To Your Account
               <span><FontAwesomeIcon icon={faArrowRightLong} style={{color: "rgb(black)",}} /></span>
              </button>
                <button className='   text-black  w-full justify-center  mt-3  mb-10 font-bold lg:hidden curson-pointer'>
            Create an Account?
           
            
          </button>
             
          </div>

          <div className=' leading-releaxed bg-blue-600 rounded-l-[160px] justify-center lg:flex items-center hidden p-10 flex-col '>
            <h1 className='text-5xl  text-white font-bold mb-8 '>
              Welcome Back to <br />
              your workplace
            </h1>
             <div>
            <p className=' text-gray-50 text-xl p-5 leading-relaxed mb-10'>
              Manage employee,track attendance and <br /> boost  productivity - all in one palce
            </p>
          </div>
          <button className='  px-8 py-4 text-white border-2 rounded-2xl hover:bg-blue-500 font-bold cursor-pointer border-white'>
            Create an Account
          </button>

          </div>
         


 </div>
 {/* Register Area */}
 
  
        </div>
    
</div>
  





    </>
     
  )
}

export default authpPage