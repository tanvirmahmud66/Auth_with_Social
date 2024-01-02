import React, { useContext, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import AuthContext from '../contexts/AuthContext'
import Home from './Home'
import Login from './Login'

const Google = ({children}) => {
  let location = useLocation()
  const {googleAuthentication} = useContext(AuthContext)
  useEffect(()=>{
    const values = queryString.parse(location.search)
    const state = values.state? values.state:null;
    const code = values.code? values.code:null;
    console.log("google state: ", state)
    console.log("google code: ", code)
    if(state && code){
      googleAuthentication(state,code)
    }
  },[location])

  const {user} = useContext(AuthContext)

  return (
    <>
      {user ? <Home/>:<Login/>}
    </> 
  )
}

export default Google