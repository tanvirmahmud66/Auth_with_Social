import React, { useState } from 'react'
import {createContext} from 'react'

const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children}) =>{

    const [Token, setToken] = useState(null)
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
        }
    }

    //userSignup --------------------------------------------------------------- user signup
    let userSignup = async(e)=>{
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
        }else{
            setSignupStatus({
                password:null,
                email:null,
                non_field_errors:null,
                status:response.status,
                statusText:response.statusText,
                alert:true,
            })
        }
    }

    // ------------------------------------ context data ------------------------
    let contextData = {
        userLogin:userLogin,
        loginStatus:loginStatus,

        userSignup:userSignup,
        signupStatus:signupStatus,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}