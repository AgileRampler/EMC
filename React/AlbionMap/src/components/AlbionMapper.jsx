import React from 'react'
import logo from '../assets/albion_mapper_icon.svg'
import AvailableZones from './AvailableZones.jsx'
import {  useNavigate } from 'react-router-dom';


const AlbionMapper = () => {

 const navigate = useNavigate();
 
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Header */}
      <div className="relative flex items-center border-b-2 h-24 px-6">
        <img  onClick={()=> navigate("/")}
          src={logo}
          alt="logo"
          className="w-12 h-12 cursor-pointer"
        />

        <div className="ml-4">
         <div >
            <h1 onClick={()=> navigate("/")}  className="text-white text-2xl cursor-pointer font-mono">
              AvaIntel
            </h1>
         </div>
          <p className="text-white text-sm font-mono">
            Your Avalonian Roads Intel
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-6rem)]">
        
        {/* Left Sidebar */}
        <div className="
          w-full 
          md:w-96 
          border-r-2 
          border-white 
          overflow-hidden
         
        ">
          <AvailableZones />
        </div>

      

      </div>
    </div>
  )
}

export default AlbionMapper
