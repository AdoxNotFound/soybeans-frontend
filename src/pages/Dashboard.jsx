import {React, useState} from 'react'
import useToken from '../app/useToken'
import LoginPage from './LoginPage';

const Dashboard = () => {
  const {tokens, setTokens, clearTokens } = useToken(); 

  //boton de logout, se debe agregar a parte, mas adelate
 
  if (!tokens) {
    {return <LoginPage setToken={setTokens}/>}
  }
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={clearTokens}>Cerrar sesion</button>
    </div>
  )
}

export default Dashboard