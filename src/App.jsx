import React from 'react'
import LandingPage from './pages/LandingPage/landingpage'
import { Routes,Route} from 'react-router-dom'
import AuthPage from "./pages/AuthenticationPage/authpPage"
import Dashboard from "./pages/Dashboard/dashboard"

const App = () => {
  return (
    <>
   <div> 
 <Routes>
      
 < Route path="/"       element={<LandingPage/>}/>
 < Route path ="/auth"  element={<AuthPage/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>

  </Routes>
 
    </div>
    </>
  )
}

export default App