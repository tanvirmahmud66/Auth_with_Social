import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const ActivateAccount = () => {

  const{uid, token} = useParams()
  const{activateAccount} = useContext(AuthContext)

  const activateBtnHandle = () =>{
    activateAccount(uid, token)
  }


  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <div className='w-[70%] h-[60%] bg-slate-300 rounded-md flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-2xl font-semibold mb-5'>To activate your account click the activate button.</div>
          <button onClick={activateBtnHandle} type="button" className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md px-5 py-4 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Activate Account</button>
        </div>
      </div>
    </div>
  )
}

export default ActivateAccount