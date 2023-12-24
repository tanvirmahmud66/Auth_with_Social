import React, { useState } from 'react'
import {createContext} from 'react'

const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children}) =>{

    const [alert, setAlert] = useState(false)

    // user login
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
        console.log(data)
        console.log(response)
        if(response.status===401){
            setAlert(true)
        }
    }

    //userSignup
    let userSignup = async(e)=>{
        e.preventDefault()
    }

    let contextData = {
        userLogin:userLogin,
        alert:alert,
        setAlert:setAlert,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}