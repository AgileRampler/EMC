import React, { useState,useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import demo from '../../assets/demo.png'
import image from '../../assets/demox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'




const landingpage = () => {
     const products = [{
        tag: "👥" ,
        color:"bg-blue-100",
        hovercolor:"hover:bg-blue-200  transition-colors duration-200",
        title : "Employee Management",
        desc  :" Store and manage all employee informantion in one centralized platform"

 },
 {
          tag: "📆" ,
            color:"bg-green-100",
             hovercolor:"hover:bg-green-200  transition-colors duration-200",
        title : "Attendance Tracking",
        desc  :" Track attendance in real-time and genarte accurate reports effortlessly"

 },
 
 {
         tag: "📋" ,
           color:"bg-purple-100",
            hovercolor:"hover:bg-purple-200  transition-colors duration-200",
        title : "Leagve Management ",
        desc  :" Simplify leave requests, approvals and balance management."

 },
 
 {
          tag: "⭐" ,
        color:"bg-orange-100",
         hovercolor:"hover:bg-orange-200  transition-colors duration-200",
        title : "Performance Reviews",
        desc  :" Evaluate performance, set goals and boots employee productivity"

 },
 
 {
        tag: "💲" ,
    color:"bg-red-100",
     hovercolor:"hover:bg-red-200  transition-colors duration-200",
        title : "Payroll Management  ",
        desc  :" Automate payroll processing and ensire accurate compensation"

 },
 
 {          
      tag: " 📈" ,
       color:"bg-cyan-100",
        hovercolor:"hover:bg-cyan-200  transition-colors duration-200",
        title : "Reports & Analystics",
        desc  :" Generate insightful reports and make data-driven decisions with ease"

 },
 
]


const faqs = [
  {
    question: "What is EMS?",
    answer: "EMS (Employee Management System) is an all-in-one HR platform that helps businesses manage employee data, track attendance, monitor performance, and streamline payroll — all from a single dashboard."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard AES-256 encryption, secure cloud infrastructure, and regular security audits to ensure your employee data is always protected."
  },
  {
    question: "Can I try EMS for free?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to get started."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time from your account settings. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle."
  },
  {
    question: "How many employees can I manage?",
    answer: "Our Starter plan supports up to 50 employees, the Pro plan supports up to 500, and our Enterprise plan has no limit. You can upgrade anytime as your team grows."
  },
]

const [openIndex, setOpenIndex] = useState(null)   // only one open at a time


  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)          // click again to close
  }

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-blue-300 shadow-sm' : 'border-gray-200'
      }`}
    >
      {/* Question row */}
      <button
        onClick={onClick}
        className='w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer'
      >
        <span className={`font-medium text-base ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
          {question}
        </span>
        <span className={`text-sm transition-transform duration-300 ml-4 shrink-0 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </span>
      </button>

      {/* Answer — animates open/close */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className='px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3'>
          {answer}
        </div>
      </div>
    </div>
  )
}



 const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }



return (



    
<>
{/* 
██████╗░░█████╗░██████╗░██╗░░░██╗  ░██████╗███████╗░█████╗░████████╗██╗░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝  ██╔════╝██╔════╝██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██████╦╝██║░░██║██║░░██║░╚████╔╝░  ╚█████╗░█████╗░░██║░░╚═╝░░░██║░░░██║██║░░██║██╔██╗██║
██╔══██╗██║░░██║██║░░██║░░╚██╔╝░░  ░╚═══██╗██╔══╝░░██║░░██╗░░░██║░░░██║██║░░██║██║╚████║
██████╦╝╚█████╔╝██████╔╝░░░██║░░░  ██████╔╝███████╗╚█████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║
╚═════╝░░╚════╝░╚═════╝░░░░╚═╝░░░  ╚═════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝ */}
<div id='home' className="relative min-h-screen z-0  bg-[#f8f9fc] overflow-hidden font-sans">

      {/* Background Shapes */}
      <div className="absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full bg-[#eef2f9] opacity-80"></div>

      <div className="absolute top-0 right-0 w-[700px] h-[300px] bg-gradient-to-l from-[#f1f4fb] to-transparent rounded-bl-[220px] opacity-90"></div>

      <div className="absolute -bottom-40 -right-28 w-[700px] h-[700px] rounded-full bg-[#eef2fb] opacity-80"></div>

      <div className="absolute bottom-0 right-20 w-[450px] h-[450px] rounded-full bg-[#f5f7fc] opacity-90"></div>


  <div className='relative z-10  '>  
 
         <NavBar/>
        {/*
██████╗░░█████╗░██████╗░██╗░░░██╗  ░██████╗███████╗░█████╗░████████╗██╗░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝  ██╔════╝██╔════╝██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██████╦╝██║░░██║██║░░██║░╚████╔╝░  ╚█████╗░█████╗░░██║░░╚═╝░░░██║░░░██║██║░░██║██╔██╗██║
██╔══██╗██║░░██║██║░░██║░░╚██╔╝░░  ░╚═══██╗██╔══╝░░██║░░██╗░░░██║░░░██║██║░░██║██║╚████║
██████╦╝╚█████╔╝██████╔╝░░░██║░░░  ██████╔╝███████╗╚█████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║
╚═════╝░░╚════╝░╚═════╝░░░░╚═╝░░░  ╚═════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝*/}
        

        <div className=' px-10 pt-16 pb-20  '>

            <div className=''>
                <div className=' flex text-mg  font-medium gap-2 items-center'>
                      <span className="text-yellow-500">★</span>Trusted by companies worldwide </div>
            </div>
            <div className='text-6xl mt-8 font-bold '>
                Manage Your Employees <br />
                <span className='text-blue-700'>Smarter,</span> Not Harder
            
            </div>
            <div className='text-xl text-gray-700  leading-relaxed  flex mt-8'>
                Streamline HR processes, track performance, manage <br />
                attendance and boost productivity - all in one place
                

            </div>
            <div className='flex gap-5 flex-wrap  mt-10 '>

                <button className='bg-blue-600 hover:bg-blue-700 text-white text-xl mt-10 rounded-2xl p-4  cursor-pointer'>Get Started free 🡢</button>
                 <button className='bg-gray-50 hover:bg-gray-200 border text-blue-700 text-xl mt-10 rounded-2xl p-4 font-semibold  cursor-pointer'>Book a Demo </button>
                
            </div>

            <div className='flex gap-10 mt-20  flex-wrap-reverse '>
                
                <div className='bg-white font-bold p-6 shadow-md min-w-55   rounded-2xl hover:bg-blue-100 transition-colors duration-200'>
                    <div className=" text-2xl mb-3">👥</div>
                    
                    Centralized 
                    <div className=' text-gray-800 text-mg font-semibold'>Employee Data</div>
                </div>
                <div className='bg-white font-bold p-6 min-w-50  hover:bg-green-100 transition-colors duration-200  rounded-2xl'>
                    <div className=" text-2xl mb-3">📈</div>

                    Real-Time
                    <div className=' text-gray-800 text-mg font-semibold'>Analystics</div>
                </div>
                <div className='bg-white font-bold p-6 min-w-50 hover:bg-purple-100 transition-colors duration-200  rounded-2xl'>
                    <div className=" text-2xl mb-3">🛡️</div>
                    Secure &
                    <div className=' text-gray-800 text-mg font-semibold'>Reliable</div>
                </div>
                
            </div>

         

  </div>

    
  </div>
 



</div>

    {/*  
███████╗███████╗░█████╗░████████╗██╗░░░██╗██████╗░███████╗░██████╗
██╔════╝██╔════╝██╔══██╗╚══██╔══╝██║░░░██║██╔══██╗██╔════╝██╔════╝
█████╗░░█████╗░░███████║░░░██║░░░██║░░░██║██████╔╝█████╗░░╚█████╗░
██╔══╝░░██╔══╝░░██╔══██║░░░██║░░░██║░░░██║██╔══██╗██╔══╝░░░╚═══██╗
██║░░░░░███████╗██║░░██║░░░██║░░░╚██████╔╝██║░░██║███████╗██████╔╝
╚═╝░░░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚══════╝╚═════╝░ */}

<div id='features' className='  bg-[#f8f9fc] font-sans  '>

  <div className='flex justify-center items-center flex-col gap-3 p-10'>
        <div className='text-sm font-bold text-blue-600'>
            POWERFUL FEATURES 
        </div>
        <div className='font-bold text-xl lg:text-3xl   '>
            Everthing You Need to Manage Your Workforce 
        </div>
        <div className='font-sm text-gray-600 font-semibold lg:leading-relaxed'>
            Our platform helps you automate HR tasks, track performance, and build a productive team.  

        </div >
       <div className='grid grid-row lg:grid-cols-3 m-10 gap-5'>
            {products.map((item,i)=>(
                <div className={`bg-white h-40 w-100  rounded-2xl  shadow-md ${item.hovercolor}`}>
                  <div className='m-5 grid grid-flow-col gap-3 grid-rows-3 '>
                <div className='row-span-3 '>     <div   className={` ${item.color} rounded-2xl  inline-block  p-4` } >{item.tag}</div></div>
                        <div key={i} className='col-span-2 font-bold   ' >{item.title}
                         <div  className=' text-gray-700  font-semibold   w-60'>{item.desc}</div>
                        </div>
        
                  </div>
            </div>
            ))}
       </div>

  </div>
   

</div>

{/* {
██████╗░██████╗░██╗░█████╗░██╗███╗░░██╗░██████╗░
██╔══██╗██╔══██╗██║██╔══██╗██║████╗░██║██╔════╝░
██████╔╝██████╔╝██║██║░░╚═╝██║██╔██╗██║██║░░██╗░
██╔═══╝░██╔══██╗██║██║░░██╗██║██║╚████║██║░░╚██╗
██║░░░░░██║░░██║██║╚█████╔╝██║██║░╚███║╚██████╔╝
╚═╝░░░░░╚═╝░░╚═╝╚═╝░╚════╝░╚═╝╚═╝░░╚══╝░╚═════╝░} */}

<div id='pricing' className='bg-white font-sans '>
    <div className='flex  flex-col justify-center items-center  gap-4 m-10' >
        <div className='font-bold text-blue-700'>
            PRICING PLANS
        </div>
         <div className='font-bold text-5xl  '>
            Simple, Transparent Pricing
        </div>
         <div className='font-medium text-gray-700'>
            Choose the plans that's right for your business
        </div>


       <div className='flex flex-col lg:flex-row gap-10 m-10  '>

            
                    {/* Free Card */}
            <div  className='shadow-md  rounded-2xl h-120 w-90 hover:border-3 hover:border-blue-800'>
                <div className='font-bold m-5 '>
                    Starter
                     <div className='font-medium text-gray-600 w-70'>Idea for small teams getting started</div>
                </div>
                <div className='m-5 font-bold text-4xl'>
                    $0.00
                    <span className='font-medium text-sm'>  /user/month</span>
                </div>
                <div className='m-5 flex justify-center w-70 p-2 border-3 rounded-xl cursor-pointer hover:bg-blue-700 hover:text-white border-blue-500 '>
                    Get Started 
                </div>
                <div className=' flex flex-col gap-3 m-5 leading-relaxed  '>
                    <div>✔️ Up to 50 Employees</div>
                    <div>✔️ Basic Analytics</div>
                    <div>✔️ Email Support</div>
                    <div>✔️ Standard Security</div>
                </div>
               
    
            </div>
             <div  className='shadow-md  rounded-2xl h-120  hover:border-3 group hover:border-blue-800 w-90'>
                <div className='text-white bg-blue-800 rounded-br-full  group-hover:inline-block  p-2 hidden  '>

                    Most Popurlar
                </div>
                <div className='font-bold m-5 '>
                   Professional
                     <div className='font-medium text-gray-600 w-70'>Perfect for growing buisness</div>
                </div>
                <div className='m-5 font-bold text-4xl'>
                    $10.00
                    <span className='font-medium text-sm'>  /user/month</span>
                </div>
                <div className='m-5 flex justify-center w-70 p-2 border-3 rounded-xl cursor-pointer hover:bg-blue-700 hover:text-white border-blue-500 '>
                    Get Started 
                </div>
                <div className=' flex flex-col gap-3 m-5 leading-relaxed  '>
                    <div>✔️ Up to 500 Employees</div>
                    <div>✔️ Advance Analytics</div>
                    <div>✔️ Priority Email Support</div>
                    <div>✔️ Advanced Security</div>
                     <div>✔️ Custom Reports</div>
                    
                </div>
               
    
            </div>
             <div  className='shadow-md hover:border-3 hover:border-blue-800 rounded-2xl h-120 w-90'>
                <div className='font-bold m-5 '>
                    Enterprise
                     <div className='font-medium text-gray-600 w-70'>For large organization with <br /> advanced need</div>
                </div>
                <div className='m-5 font-bold text-4xl'>
                    $30.00
                    <span className='font-medium text-sm'>  /user/month</span>
                </div>
                <div className='m-5 flex justify-center w-70 p-2 border-3 rounded-xl cursor-pointer hover:bg-blue-700 hover:text-white border-blue-500 '>
                    Get Started 
                </div>
                <div className=' flex flex-col gap-3 m-5 leading-relaxed  '>
                    <div>✔️ Unlimitted Employees</div>
                    <div>✔️ Advanced Analytics</div>
                    <div>✔️ 24/7 Priority Email Support</div>
                    <div>✔️ Enterprise Security</div>
                     <div>✔️ Custom Reports</div>
                      <div>✔️ Dedicated Account Manager</div>
                </div>
               
    
            </div>
    
       </div>


        
    </div>

</div>

{/* 
███████╗██╗░░██╗██████╗░██╗░░░░░░█████╗░██████╗░███████╗
██╔════╝╚██╗██╔╝██╔══██╗██║░░░░░██╔══██╗██╔══██╗██╔════╝
█████╗░░░╚███╔╝░██████╔╝██║░░░░░██║░░██║██████╔╝█████╗░░
██╔══╝░░░██╔██╗░██╔═══╝░██║░░░░░██║░░██║██╔══██╗██╔══╝░░
███████╗██╔╝╚██╗██║░░░░░███████╗╚█████╔╝██║░░██║███████╗
╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░╚═╝░░╚═╝╚══════╝ */}

<div id='resource' className='bg-[#f8f9fc]  font-sans  m-6  gap-0 flex  flex-row'>
    <div>
        <img src={image} className='w-auto h-200 hidden lg:flex  rounded-4xl' alt="" />
    </div>

    <div className='m-10 lg:m-30  text-blue-700 font-medium'>
        ALL-IN-ONE SOLUTION

        <div className='font-bold text-4xl mt-5 text-black'>One Platoform. Endless <br /> Possibilities. 
       
        </div>
        <div className='mt-5 leading-10 font-semibold text-gray-700'>
            ✔️ Easy to use and beginner Freindly <br />
            ✔️ Secure cloud-based platform  <br />
            ✔️ Access anytime, anywhere <br />
            ✔️ Scalable for any size of business
            
        </div>
        <div>
            <button className='mt-10 text-white bg-blue-700 p-4 w-70 text-2xl rounded-xl cursor-pointer hover:bg-blue-600'>
                Explore Resources 🡢
            </button>
        </div>
        
    </div>
    
</div>

{/* 
███████╗░█████╗░░██████╗░
██╔════╝██╔══██╗██╔═══██╗
█████╗░░███████║██║██╗██║
██╔══╝░░██╔══██║╚██████╔╝
██║░░░░░██║░░██║░╚═██╔═╝░
╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░ */}

<div id='faq' className=' bg-[#f8f9fc]  font-sans'>

<div className=' flex gap-5 p-10 lg:p-20 flex-col lg:flex-row'>

    <div className='  bg-[#f6f6f8] lg:h-160 lg:w-240   h-120 w-80 shadow-md rounded-2xl'>
        <div className='font-medium text-blue-600 lg:text-xl m-5  lg:m-20'>
            READY TO GET STARTED?
            <div className='font-bold lg:text-6xl text-3xl text-black mt-10' > 
                Transform Your HR <br />
                Management Today!
            </div>
            <div className='mt-10 font-semibold text-gray-700 text-l w-70 lg:w-120  leading-relaxed'>
                Join Thousands of companies that trust EMS to  manage thier workface efficetly
            </div>
            <div className='flex flex-row gap-10 mt-10'>
                <div className='text-white bg-blue-700 p-4 w-50 rounded-2xl hover:bg-blue-600 cursor-pointer '>
                    Get Started Free
                </div>
                <div className='border border-blue-700 p-4 rounded-2xl w-40 hover:bg-gray-200 cursor-pointer'>
                    Book a Demo
                </div>
            </div>
        </div>
    </div>

    <div className='bg-[white] h-120 w-80  lg:h-160 lg:w-240 shadow-md rounded-2xl m'>
        <div className='font-bold text-l m-4 lg:m-20'>
            Frequently Asked Questions 

             
           <div className='flex flex-col gap-3'>
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
        </div>
        
    </div>

</div>

    
    
</div>
<div>
    visible && (
          <button
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 z-50 bg-blue-700 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 cursor-pointer'
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )
</div>

</>
  )
}

export default landingpage