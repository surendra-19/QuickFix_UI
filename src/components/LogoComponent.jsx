import React from 'react'
import Logo from '../assets/Logo.png'
import './LoginForm.css'
function LogoComponent() {
  return (
    <div className="topSection">
        <img src={Logo} alt="Logo" />
        <h2>Quick Fix</h2>
    </div>
  )
}

export default LogoComponent