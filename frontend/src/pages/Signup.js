import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleImg from '../assets/search.png'
import FacebookImg from '../assets/facebook.png'
import GithubImg from '../assets/github.png'
import AuthContext from '../contexts/AuthContext'



const Signup = () => {

  const [showPassword, setShowPassword] = useState(false)
  const {userSignup} = useContext(AuthContext)


  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <div>
      <form className="w-[600px]" onSubmit={(e)=>userSignup(e)}>
        <h2 className='text-2xl font-semibold py-3 text-center'>Signup</h2>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email<span className='text-red-500 ms-1'>*</span></label>
          <input
            type="email"
            id="email"
            name='email'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email@email.com"
            required
          />
        </div>
        <div className='mb-5 flex justify-between items-center'>
          <div className="w-[48%]">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name<span className='text-red-500 ms-1'>*</span></label>
            <input
              type="text"
              id="first_name"
              name='first_name'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="first name"
              required
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input
              type="text"
              id="last_name"
              name='last_name'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="last name"
            />
          </div>
        </div>
        <div className="mb-5 relative">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password<span className='text-red-500 ms-1'>*</span></label>
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
        <div className="mb-5 relative">
          <label htmlFor="re_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password<span className='text-red-500 ms-1'>*</span></label>
          <input
            type={`${showPassword?"text":"password"}`}
            id="re_password"
            name='re_password'
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='confirm password'
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
          Confirm
        </button>
        <div className='text-sm py-3 text-center'>Already have an account? <Link className='text-blue-500' to='/login'>Login</Link></div>
      </form>


      <div className='mt-10'>
          <div className='w-full flex justify-center items-center'>
            <div className='border-b border-gray-400 inline-block w-full'></div>
            <div className='inline-block w-3/4 text-center'>Signup with</div>
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

export default Signup