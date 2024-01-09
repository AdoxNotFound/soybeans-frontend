import {React, useState} from 'react'
import Login from './Login'

const Dashboard = () => {
  const [token, setToken] = useState();
  if (!token) {
    {return <Login setToken={setToken}/>}
  }
  return (
    <div>
      <h1>DashBoard</h1>
    </div>
  )
}

export default Dashboard