import React from "react";
import logo from "../src/assets/albion_mapper_icon.svg";
import AvailableZones from "./components/AvailableZones";
import AlbionMapper from "./components/AlbionMapper";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
   <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white ">
      <AlbionMapper/>
        
      </div>
   </BrowserRouter>
  );
};

export default App;
