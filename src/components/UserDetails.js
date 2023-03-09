import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
  const { state } = useLocation();
  const email = state
  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate('/signin')
    }
  }, [])

  const logout = () => {
    localStorage.setItem("token",'')
    navigate('/signup')
  }

  return (
    <>
   <div className="profile">
     <img src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
     </div>
      <h1 className='wel'> {email} 👋- </h1>
      <div className="img2">
        <img src="https://pbs.twimg.com/media/E9SfvhyVcAY_EH7.jpg:large" alt="" />
      </div>
      <button className='btn3' type='submit' onClick={logout}>Logout</button>
    </>
  )
}

export default UserDetails