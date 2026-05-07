import React from 'react'
// ✓ Add this import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className='p-10  flex justify-between items-center'>

        {/*  Logo area
        */}

            <div className='font-bold text-2xl '>
              <span className='m-2 tex'>  <FontAwesomeIcon icon={faUsers}    style={{color: "rgb(6, 145, 255)",}} /></span>
                EMS
                <div className='font-semibold text-xl ms-12'>Employee Management System</div>
            </div>

            {/* Navigations */}

             <nav className='flex gap-4 '>

                {["Features","Solutions","Pricing","Resource","About us"].map((item,i)=>(
                    <div className=' relative font-semibold group text-xl ' key={i}>{item}
                    <span className='absolute -bottom-1 left-0 h-1  w-0  bg-blue-800 group-hover:w-full transition-all duration-300  '></span></div>
                ))}

             </nav>

             {/* Login /Signup */}

             <div className=' flex gap-6'>
                <button className='bg-white p-3'> Login</button>
                <button>Get Started</button>
             </div>

             

    </div>
  )
}

export default NavBar