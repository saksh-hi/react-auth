import React, { useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase/config';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import './Signin.css'

const Signin = () => {
    const auth =getAuth(app)
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [passward, setpassward] = useState("")
    

    const siginhandler=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,passward)
        .then((reponse)=>{
            const token = reponse.user.accessToken
            const email = reponse.user.email
            
            // Here redirect to home page
            navigate('/',
            {
                state: email
              })
            localStorage.setItem("token",token)
        })
        .catch((error)=>{
            const errorcode =error.code
            const errorMessage =error.message
            console.log(errorcode)
            alert(errorMessage)
            // console.log(errorMessage)
        })
    }

  return (
    <>
    <form className='sign-form' onSubmit={siginhandler} >
      <h1>Sign-In</h1>
            <input className='sign-inpo'
            type="email" 
            placeholder='email'
            value={email}
            onChange={(e)=> setemail(e.target.value)}
            /><br></br>
            <input className='sign-inpo'
            type="text"
            placeholder='******'
            value={passward}
            onChange={(e)=> setpassward(e.target.value)}
            /><br></br>
            <button className='btn2' >submit</button>
    <div className='link2'> If not account <Link to="/signup">Signup</Link>  </div>
    </form>
    
    </>
  )
}

export default Signin