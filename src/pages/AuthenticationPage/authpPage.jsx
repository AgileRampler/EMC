import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faUsers,
  faArrowLeftLong,
  faCircle,
  faArrowRightLong,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faGoogle,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import {
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom'

import axios from "axios"

const AuthPage = () => {

  // =========================================
  // ROUTER
  // =========================================

  const location = useLocation()
  const navigate = useNavigate()

  // =========================================
  // LOGIN / REGISTER MODE
  // =========================================

  const [isLogin, setisLogin] = useState(
    location.state?.mode === "register"
      ? false
      : true
  )

  // =========================================
  // PASSWORD SHOW / HIDE
  // =========================================

  const [showLoginPassword, setShowLoginPassword] = useState(false)

  const [showRegPassword, setShowRegPassword] = useState(false)

  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false)

  // =========================================
  // LOADING
  // =========================================

  const [loading, setLoading] = useState(false)

  // =========================================
  // SEPARATE ERROR MESSAGES FOR EACH FORM
  // =========================================

  const [loginError, setLoginError] = useState("")

  const [registerError, setRegisterError] = useState("")

  // =========================================
  // LOGIN FORM DATA
  // =========================================

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  // =========================================
  // REGISTER FORM DATA
  // =========================================

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  // =========================================
  // HANDLE LOGIN CHANGE
  // =========================================

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  // =========================================
  // HANDLE REGISTER CHANGE
  // =========================================

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  // =========================================
  // LOGIN FUNCTION
  // =========================================

  const handleLogin = async (e) => {

    e.preventDefault()
    setLoginError("")

    // VALIDATION
    if (!loginData.email || !loginData.password) {
      setLoginError("All fields are required")
      return
    }

    try {

      setLoading(true)

      const response = await axios.post(
        "https://emc-server-brc9.onrender.com/api/auth/login",
        loginData
      )

      // SAVE TOKEN
      localStorage.setItem("token", response.data.token)

      // SUCCESS
      navigate("/dashboard")

    } catch (error) {

      setLoginError(
        error.response?.data?.message || "Login Failed"
      )

    } finally {
      setLoading(false)
    }

  }

  // =========================================
  // REGISTER FUNCTION
  // =========================================

  const handleRegister = async (e) => {

    e.preventDefault()
    setRegisterError("")

    // VALIDATION
    if (
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      setRegisterError("All fields are required")
      return
    }

    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError("Passwords do not match")
      return
    }

    try {

      setLoading(true)

      // only send email + password, not confirmPassword
      const response = await axios.post(
        "https://emc-server-brc9.onrender.com/api/auth/register",
        {
          email: registerData.email,
          password: registerData.password,
            confirmPassword: registerData.confirmPassword
        }
      )

      // SAVE TOKEN
      localStorage.setItem("token", response.data.token)

      // SUCCESS
      navigate("/dashboard")

    } catch (error) {

      setRegisterError(
        error.response?.data?.message || "Registration Failed"
      )

    } finally {
      setLoading(false)
    }

  }

  return (
    <>

      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav className='font-sans px-4 pt-10 lg:p-10 bg-[#f8f9fc] flex justify-between'>

        {/* LEFT */}

        <div className='font-bold text-xl md:text-2xl'>

          <span>
            <FontAwesomeIcon
              icon={faUsers}
              style={{ color: "rgb(6,145,255)" }}
            />
          </span>

          EMS

          <div className='font-semibold text-sm md:text-xl ms-8'>
            Employee Management System
          </div>

        </div>

        {/* RIGHT */}

        <div className='flex gap-10 items-center'>

          <div className='text-green-800 font-medium hidden lg:flex gap-2'>

            <FontAwesomeIcon
              className='animate-pulse duration-300 mt-1'
              icon={faCircle}
            />

            <span>14-Days Free Trial</span>

          </div>

          <Link
            to="/"
            className='flex gap-2 cursor-pointer font-bold'
          >

            <span>
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </span>

            Back to Home

          </Link>

        </div>

      </nav>

      {/* =========================================
          AUTH SECTION
      ========================================= */}

      <div className='flex justify-center  overflow-hidden px-4 py-10'>

        <div className='inline-block relative w-full max-w-6xl bg-[#f8f9fc] rounded-2xl shadow-2xl overflow-hidden'>

          {/* MOBILE SWITCHER */}

          <div className='lg:hidden flex m-4 rounded-xl overflow-hidden border border-gray-200'>

            <button
              onClick={() => setisLogin(true)}
              className={
                "flex-1 py-3 text-sm font-bold transition-all duration-300 " +
                (isLogin ? 'bg-blue-600 text-white' : 'bg-white text-gray-500')
              }
            >
              Login
            </button>

            <button
              onClick={() => setisLogin(false)}
              className={
                "flex-1 py-3 text-sm font-bold transition-all duration-300 " +
                (!isLogin ? 'bg-blue-600 text-white' : 'bg-white text-gray-500')
              }
            >
              Register
            </button>

          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2'>

            {/* =========================================
                LOGIN AREA
            ========================================= */}

            <div
              className={
                "leading-8 lg:p-20 lg:pt-10 " +
                (isLogin
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 translate-x-20 hidden lg:block")
              }
            >

              <div className='text-4xl font-bold p-10 text-center'>
                LOGIN
              </div>

              {/* SOCIALS */}

              <div className='px-20 flex gap-3 mb-5'>

                <div className='bg-white rounded-2xl border p-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faGoogle} size='2x' />
                </div>

                <div className='bg-white rounded-2xl border p-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faGithub} size='2x' />
                </div>

                <div className='bg-white rounded-2xl border p-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </div>

              </div>

              <div className='text-center mb-4 font-medium text-gray-600'>
                or use your email and password
              </div>

              {/* LOGIN FORM */}

              <form
                onSubmit={handleLogin}
                className='flex m-4 mb-3 justify-center flex-col gap-4 leading-relaxed'
              >

                {/* EMAIL */}

                <input
                  className='w-full p-4 bg-white rounded-2xl border'
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={loginData.email}
                  onChange={handleLoginChange}
                />

                {/* PASSWORD */}

                <div className='relative w-full'>

                  <input
                    className='w-full bg-white rounded-2xl p-4 pr-12 border'
                    type={showLoginPassword ? "text" : "password"}
                    name="password"
                    placeholder='Password'
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />

                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'
                  >
                    <FontAwesomeIcon icon={showLoginPassword ? faEyeSlash : faEye} />
                  </button>

                </div>

                {/* LOGIN ERROR */}

               

              <div className='flex  gap-10 '> 
                  <div className='mt-1 font-semibold ms-2 cursor-pointer'>
                    Forgot Your Password?
                  </div>
              
                  
                  
              </div>

                {/* BUTTON */}

                <button
                  type='submit'
                  disabled={loading}
                  className='mt-5 bg-blue-700 rounded-3xl hover:bg-blue-600 p-4 flex justify-center items-center cursor-pointer text-white text-lg font-bold gap-2 mb-10 disabled:opacity-60'
                >
                  {loading ? "Loading..." : "Login Account"}
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>

                     {loginError && (
                  <div className='text-red-500 absolute ms-50  mt-5 font-semibold  text-center'>
                    {loginError}
                  </div>
                )}

              </form>

            </div>

            {/* =========================================
                REGISTER AREA
            ========================================= */}

            <div
              className={
                "leading-8 lg:p-20 lg:pt-10 " +
                (!isLogin
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 translate-x-20 hidden lg:block")
              }
            >

              <div className='text-4xl font-bold p-10 text-center'>
                Create An Account
              </div>

              {/* SOCIALS */}

              <div className='px-20 flex gap-3 mb-5'>

                <div className='bg-white rounded-2xl border p-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faGoogle} size='2x' />
                </div>

                <div className='bg-white rounded-2xl border p-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faGithub} size='2x' />
                </div>

                <div className='bg-white rounded-2xl border p-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </div>

              </div>

              <div className='text-center mb-4 font-medium text-gray-600'>
                Create your account to get started
              </div>

              {/* REGISTER FORM */}

              <form
                onSubmit={handleRegister}
                className='flex m-4 mb-3 justify-center flex-col gap-4 leading-relaxed'
              >

                {/* EMAIL */}

                <input
                  className='w-full p-3 bg-white rounded-2xl border'
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={registerData.email}
                  onChange={handleRegisterChange}
                />

                {/* PASSWORD */}

                <div className='relative w-full'>

                  <input
                    className='w-full bg-white rounded-2xl p-3 pr-12 border'
                    type={showRegPassword ? "text" : "password"}
                    name="password"
                    placeholder='Password'
                    value={registerData.password}
                    onChange={handleRegisterChange}
                  />

                  <button
                    type="button"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'
                  >
                    <FontAwesomeIcon icon={showRegPassword ? faEyeSlash : faEye} />
                  </button>

                </div>

                {/* CONFIRM PASSWORD */}

                <div className='relative w-full'>

                  <input
                    className='w-full bg-white rounded-2xl p-3 pr-12 border'
                    type={showRegConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder='Confirm Password'
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                  />

                  <button
                    type="button"
                    onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'
                  >
                    <FontAwesomeIcon icon={showRegConfirmPassword ? faEyeSlash : faEye} />
                  </button>

                </div>

                {/* REGISTER ERROR */}

                {registerError && (
                  <span className='text-red-500 font-semibold absolute mt-20 ms-5 text-center'>
                    {registerError}
                  </span>
                )}

                {/* BUTTON */}

                <button
                  type='submit'
                  disabled={loading}
                  className='mt-5 bg-blue-700 rounded-3xl hover:bg-blue-600 p-4 flex justify-center items-center cursor-pointer text-white text-lg font-bold gap-2 mb-10 disabled:opacity-60'
                >
                  {loading ? "Loading..." : "Create Account"}
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>

              </form>

            </div>

            {/* =========================================
                BLUE PANEL
            ========================================= */}

            <div
              className={
                "absolute top-0 h-full w-1/2 hidden lg:flex flex-col justify-center items-center text-center bg-blue-600 p-10 z-20 transition-all duration-700 ease-in-out " +
                (isLogin ? 'left-1/2 rounded-l-[160px]' : 'left-0 rounded-r-[160px]')
              }
            >

              <div className='text-5xl text-white font-bold leading-tight mb-8'>
                {isLogin ? (
                  <>Welcome Back to your workplace</>
                ) : (
                  <>Join Your <br /> Workplace Today</>
                )}
              </div>

              <div className='text-xl text-white font-medium leading-tight mb-8'>
                {isLogin ? (
                  <>Manage employees, track attendance and boost productivity</>
                ) : (
                  <>Create your account and start managing smarter</>
                )}
              </div>

              <button
                onClick={() => setisLogin(!isLogin)}
                className='px-8 py-4 border-2 border-white rounded-2xl text-white font-bold hover:bg-blue-500'
              >
                {isLogin ? 'Create An Account' : 'Login To Your Account'}
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default AuthPage