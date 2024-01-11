import {React, useState} from 'react'
import Login from './Login'
import useToken from '../app/useToken'

const Dashboard = () => {
  const {tokens, setTokens, clearTokens } = useToken(); 

  //boton de logout, se debe agregar a parte, mas adelate
 
  if (!tokens) {
    {return <Login setToken={setTokens}/>}
  }
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={clearTokens}>Cerrar sesion</button>
    </div>
  )
}

export default Dashboard