import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import AuthContext from '../contexts/AuthContext'


const MainLayout = ({children}) => {

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