import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
        <h1>Login Page</h1>
        <form>
            <label>Enter your email id</label><br />
            <input type="email" placeholder='Enter your email id here' /><br />
            <label>Enter your password</label><br />
            <input type="password" placeholder='Enter your password here' /><br />
            <input type="submit" value="Login" />
        </form>
    </>
  )
}

export default Login