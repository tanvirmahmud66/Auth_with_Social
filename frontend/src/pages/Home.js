import React, { useContext } from 'react'
import Background from '../assets/Hero_background.jpg'
import AuthContext from '../contexts/AuthContext'

const Home = () => {
  
  const {user} = useContext(AuthContext)
  console.log(user)

  return (
    <div>
      <img src={Background} alt='hero background'/>
    </div>   
  )
}

export default Home