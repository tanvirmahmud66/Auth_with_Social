import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const ResetPassword = () => {

  const {resetPassword} = useContext(AuthContext)

  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <div>

      {/* login form */}
      <form className="w-[600px]" onSubmit={(e)=>resetPassword(e)}>
        <h2 className='text-2xl font-semibold py-3 text-center'>Forget Password?</h2>

        {/* alert */}
      {/* {loginStatus.alert &&
        <div id="alert-1" class="flex items-center p-4 mb-4 text-red-700 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span class="sr-only">Info</span>
          <div class="ms-3 text-sm font-medium">
            {loginStatus.detail}
          </div>
        </div>} */}

        <div className='text-sm pb-5'>Enter your email address to identify your account. We will send code to your email address to reset password. </div>

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
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
        <div className='text-sm py-3 text-center'><Link className='text-blue-500' to='/login'>Back</Link></div>
      </form>

      
      </div>
      </div>
  )
}

export default ResetPassword