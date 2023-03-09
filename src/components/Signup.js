import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'



export const Signup = () => {
  const auth = getAuth(app);
  const navigate = useNavigate()
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [passward, setpassward] = useState("")



  const signuphandler = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, passward)
      .then((response) => {
        const user = response.user
        console.log(user)
        setemail("")
        setpassward("")
        setusername("")
        navigate('/signin')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        // console.log(errorMessage);
      });
  }

  return (
    <>
      <form className='form' onSubmit={signuphandler}>
      <div className="img">
        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80" alt="" />
        </div>
        <div className="for">
        <h1>Signup here</h1>

        <input className='inpo'
          type="text"
          placeholder='Enter your username'
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <br></br>
        <input className='inpo'
          type="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br></br>
        <input className='inpo'
          type="passward"
          placeholder='Enter your pwd'
          value={passward}
          onChange={(e) => setpassward(e.target.value)} /><br></br>
        <button className='btn' type='submit'>SignUp</button>
        <div className='link'>If you already Sign-Up   <Link to="/Signin">Sig-In</Link> </div>

        </div>
        
 


      </form>


    </>
  )
}