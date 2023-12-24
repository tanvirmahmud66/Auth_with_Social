import React from 'react'
import Navbar from '../components/Navbar'

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