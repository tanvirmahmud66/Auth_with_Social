import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import AuthContext from '../contexts/AuthContext'
import Home from './Home'
import Login from './Login'

const Facebook = ({children}) => {
  let location = useLocation()
  const {facebookAuthentication} = useContext(AuthContext)
  useEffect(()=>{
    const values = queryString.parse(location.search)
    const state = values.state? values.state:null;
    const code = values.code? values.code:null;
    console.log("facebook state: ", state)
    console.log("facebook code: ", code)
    if(state && code){
      facebookAuthentication(state,code)
    }
  },[location])

  const {user} = useContext(AuthContext)

  return (
    <>
    {user ? <Home/>:<Login/>}
    </>
  )
}

export default Facebook