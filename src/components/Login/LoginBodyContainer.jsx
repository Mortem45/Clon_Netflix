import React from 'react'
import 'enl-styles/Login/LoginBodyContainer.css'

const LoginBodyContainer = ({ children }) => (
  <div className='LoginBodyContainer__Container'>
    <div className='LoginBodyContainer'>
      {children}
    </div>
  </div>
)

export default LoginBodyContainer
