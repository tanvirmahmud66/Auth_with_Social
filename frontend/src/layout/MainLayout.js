import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import AuthContext from '../contexts/AuthContext'

const MainLayout = ({children}) => {
  let location = useLocation()
  const {googleAuthentication} = useContext(AuthContext)
  useEffect(()=>{
    const values = queryString.parse(location.search)
    const state = values.state? values.state:null;
    const code = values.code? values.code:null;
    if(state && code){
      googleAuthentication(state,code)
    }
  },[location])

  return (
    <div>
        <Navbar/>
        <main className='max-w-screen-xl mx-auto'>
            {children}
        </main>
    </div>
  )
}

export default MainLayout