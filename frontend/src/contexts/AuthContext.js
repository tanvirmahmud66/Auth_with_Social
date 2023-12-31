import React, { useEffect, useState } from 'react'
import {createContext} from 'react'
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children}) =>{

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    // let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(null)

    let [activateReqStatus, setActivateReqStatus] = useState(null)
    let [resetReqStatus, setResetReqStatus] = useState(null)
    let [resetPasswordStatus, setResetPasswordStatus] = useState(null)
    let [spinner, setSpinner] = useState(false)

    const [loginStatus, setLoginStatus] = useState({
        detail:'',
        status:null,
        statusText:'',
        alert: false,
    })

    const [signupStatus, setSignupStatus] = useState({
        password: null,
        email:null,
        non_field_errors:null,
        status:null,
        statusText:'',
        alert:false,
    })

    // user login -------------------------------------------------------------- user login
    let userLogin = async(e)=>{
        setSpinner(true)
        e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/auth/jwt/create/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                "email":e.target.email.value,
                "password":e.target.password.value,
            })
        })
        let data = await response.json()
        console.log("data",data)
        console.log("response", response)
        if(response.status!==200){
            setLoginStatus({
                detail:data.detail,
                status:response.status,
                statusText:response.statusText,
                alert:true
            })
            setSpinner(false)
        }else{
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            setLoginStatus({
                detail:data.detail,
                status:response.status,
                statusText:response.statusText,
                alert:false
            })
            setSpinner(false)
        }
    }

    // load user --------------------------------------------------------------- load user
    let loadUser = async()=>{
        let response = await fetch(`http://127.0.0.1:8000/auth/users/me/`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization': `JWT ${authTokens?.access}`,
                'Accept': 'application/json',
            }
        })
        let data = await response.json()
        if (response.status===200){
            setUser(data)
        }
    }

    useEffect(()=>{
        loadUser()    
    },[authTokens])

    //userSignup --------------------------------------------------------------- user signup
    let userSignup = async(e)=>{
        setSpinner(true)
        e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/auth/users/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                "email":e.target.email.value,
                "first_name":e.target.first_name.value,
                "last_name":e.target.last_name.value,
                "password":e.target.password.value,
                "re_password":e.target.re_password.value
            })
        })
        let data = await response.json()
        console.log(data)
        console.log(response)
        if(response.status!==201){
            setSignupStatus({
                password:data.password,
                email:data.email,
                non_field_errors:data.non_field_errors,
                status:response.status,
                statusText:response.statusText,
                alert:true,
            })
            setSpinner(false)
        }else{
            setSignupStatus({
                password:null,
                email:null,
                non_field_errors:null,
                status:response.status,
                statusText:response.statusText,
                alert:true,
            })
            setSpinner(false)
        }
    }

    // -------------------------------------------------------------------------- activate account
    let activateAccount = async(uid, token)=>{
        setSpinner(true)
        let response = await fetch(`http://127.0.0.1:8000/auth/users/activation/`, {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'uid':uid,
                'token': token,
            })
        })

        console.log(response.status)
        setActivateReqStatus(response.status)
        if (response.status){
            setSpinner(false)
        }
    }



    // -------------------------------------------------------------------------- user logout
    const logout = ()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    //--------------------------------------------------------------------------- reset password
    let resetPassword = async(e)=>{
        setSpinner(true)
        e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/auth/users/reset_password/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "email":e.target.email.value
            })
        })
        
        console.log(response.status)
        setResetReqStatus(response.status)
        if (response.status){
            setSpinner(false)
        }
    }


    //--------------------------------------------------------------------------- reset password confirm
    let resetPasswordConfirm = async(e,uid, token)=>{
        setSpinner(true)
        e.preventDefault()
        let response = await fetch(`http://127.0.0.1:8000/auth/users/reset_password_confirm/`, {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                "uid":uid,
                "token":token,
                "new_password":e.target.new_password.value,
            })
        })
        console.log(response.status)
        setResetPasswordStatus(response.status)
        if (response.status){
            setSpinner(false)
        }
        
    }



    // ------------------------------------ context data ------------------------
    let contextData = {
        userLogin:userLogin,
        loginStatus:loginStatus,

        userSignup:userSignup,
        signupStatus:signupStatus,

        activateAccount:activateAccount,
        activateReqStatus:activateReqStatus,

        logout:logout,

        authTokens:authTokens,
        user:user,

        resetPassword:resetPassword,
        resetReqStatus:resetReqStatus,
        resetPasswordConfirm:resetPasswordConfirm,
        resetPasswordStatus:resetPasswordStatus,

        spinner:spinner,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}