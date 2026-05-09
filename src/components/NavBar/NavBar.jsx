import React from 'react'
// ✓ Add this import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import "./navbar.css"


const NavBar = () => {

const [menuOpen,setMenuOpen] = useState(false)

const navLinks = [

  {
   name :"Home", path : "/#home"  
  },
   {
   name :"Features", path : "/#features"  
  },
   
   {
   name :"Pricing", path : "/#pricing"  
  },
   {
   name :"Resources", path : "/#resource"  
  },
   {
   name :"FAQ ", path : "/#faq"  
  },
]


  return (
    <div className='p-5 md:p-10  '>


            <div className='flex justify-between  items-center'>
    
            {/*  Logo area
            */}
    
                <div className='font-bold text-xl md:text-2xl  '>
                  <span className='m-2 tex'>  <FontAwesomeIcon icon={faUsers}    style={{color: "rgb(6, 145, 255)",}} /></span>
                    EMS
                    <div className='font-semibold text-sm md:text-xl  ms-12'>Employee Management System</div>
                </div>
    
                {/* Destop  Navigations */}

             

    
                 <nav className=' gap-4 hidden lg:flex '>
    
                    {navLinks.map((item,i)=>(

                        <a  className=' relative cursor-pointer font-semibold group text-xl ' key={i} href={item.path}>{item.name}
                        <span className='absolute -bottom-1 left-0 h-1  w-0  bg-blue-800 group-hover:w-full transition-all duration-300  '></span></a>
                    ))}
    
                 </nav>
    
                 {/*  DEstop Login /Signup */}
                 
           
    
                 <div className=' hidden lg:flex gap-6'>
                    <button className='bg-white p-3 rounded-2xl text-blue-600 font-bold shadow-mg hover:bg-gray-100  border cursor-pointer'> Login In</button>
                    <button className='bg-blue-700 p-3 rounded-2xl text-white font-bold shadow-mg hover:bg-blue-500  cursor-pointer'>Get Started</button>
                 </div>

                                    {/* Mobile  */}
                                         <button
          className='lg:hidden text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

  
 
</div>
                 { menuOpen && (
                                    <div className='lg:hidden mt-4 flex flex-col gap-4 border-t pt-4 '>
                                        
                 <nav className='  flex  flex-col gap-3 '>
    
                    {navLinks.map((item,i)=>(
                        <a href={item.path} className=' relative font-semibold group text-lg w-fit  ' key={i}>{item.name}
                        <span className='absolute -bottom-1 left-0 h-1  w-0  bg-blue-800 group-hover:w-full transition-all duration-300  '></span></a>
                    ))}
    
                 </nav>


                 <div className='  flex  gap-6'>
                    <button className='bg-white p-3 rounded-2xl text-blue-600 font-bold cursor-pointer'> Login In</button>
                    <button className='bg-blue-700 p-3 rounded-2xl text-white font-bold shadow:md cursor-pointer'>Get Started</button>
                 </div>

                  </div>
                                    
                             

                                    

                            )}

    </div>
  )
}

export default NavBar