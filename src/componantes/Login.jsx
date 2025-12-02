import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation, useNavigate } from 'react-router'


export const Login = () => {
    const {login ,isAuthenticated}=useContext(AuthContext)
    const navigate =useNavigate();
    const location =useLocation()
    if(isAuthenticated){
    return <Navigate to='/createPost' replace />
    }
   
    const handleLogin=()=>{
        login()
        navigate('/createPost')
  // Redirect to the page the user was trying to access, or to home
    // const from = location.state?.from?.pathname || '/';
    // navigate(from, { replace: true });
    }
  return (
    <div  className='max-w-6xl mx-auto mt-6 p-6 bg-white rounded '>
      <h2 className='text-xl '>Login</h2>
      <p>You must log in to access the Create Post page.</p>
      <button className='bg-blue-700 text-white rounded px-3 py-1'
      onClick={handleLogin}>Log In</button>
    </div>
  )
}
