import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleImg from '../assets/search.png'
import FacebookImg from '../assets/facebook.png'
import GithubImg from '../assets/github.png'
import AuthContext from '../contexts/AuthContext'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const {userLogin, alert, setAlert} = useContext(AuthContext)

  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <div>

      {/* alert */}
      {alert &&
      <div id="alert-1" class="flex items-center p-4 mb-4 text-red-700 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div class="ms-3 text-sm font-medium">
          Invalid username or password!!!
        </div>
          <button onClick={()=> setAlert(!alert)} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
      </div>}


      {/* login form */}
      <form className="w-[600px]" onSubmit={(e)=>userLogin(e)}>
        <h2 className='text-2xl font-semibold py-3 text-center'>Login</h2>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            id="email"
            name='email'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email@email.com"
            required
          />
        </div>
        <div className="mb-5 relative">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type={`${showPassword?"text":"password"}`}
            id="password"
            name='password'
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='password'
            required
          />
          <div onClick={()=>setShowPassword(!showPassword)} className="absolute right-2 top-9 flex items-center cursor-pointer">
            {showPassword?<>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </>:<>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </>}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className='text-sm py-3 text-center'>Don't have an account? <Link className='text-blue-500' to='/signup'>Signup</Link></div>
      </form>

        {/* Social login section */}
        <div className='mt-10'>
          <div className='w-full flex justify-center items-center'>
            <div className='border-b border-gray-400 inline-block w-full'></div>
            <div className='inline-block w-3/4 text-center'>Continue with</div>
            <div className='border-b border-gray-400 inline-block w-full'></div>
          </div>
          <div className='mt-3 flex justify-center items-center'>
            <div className='hover:scale-110 hover:transition-all cursor-pointer'>
              <img src={GoogleImg} width={40} alt='google'/>
            </div>
            <div className='mx-4 hover:scale-110 hover:transition-all cursor-pointer'>
              <img src={FacebookImg} width={40} alt='google'/>
            </div>
            <div className='hover:scale-110 hover:transition-all cursor-pointer'>
              <img src={GithubImg} width={40} alt='google'/>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Login