import React from 'react'
import 'enl-styles/Login/LoginHeader.css'

const LoginHeader = ({ logo }) => (
  <div className='LoginHeader__Container'>
    <div className='LoginHeader'>
      <img className='LoginHeader__Logo' src={logo} />
    </div>
  </div>
)

export default LoginHeader
