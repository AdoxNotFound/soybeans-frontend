import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Sign Up Here</h1>
          <p>UserName</p>
        <input type="text" required placeholder='JohnDoe'/>
        <p>PassWord</p>
        <input type="password" required placeholder='Please enter a strong password'/>
        <button type="submit" >Submit</button>
        <div>
          <p><input type="checkbox" />Remember Me</p>
        </div>
        </div>
  )
}

export default Login;