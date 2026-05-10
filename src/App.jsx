import React from 'react'
import LandingPage from './pages/LandingPage/landingpage'
import { Routes,Route} from 'react-router-dom'
import AuthPage from "./pages/AuthenticationPage/authpPage"

const App = () => {
  return (
    <>
   <div> 
 <Routes>
      
 < Route path="/"       element={<LandingPage/>}/>
 < Route path ="/auth"  element={<AuthPage/>}/>

  </Routes>
 
    </div>
    </>
  )
}

export default App