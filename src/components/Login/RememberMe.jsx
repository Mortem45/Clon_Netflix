import React from 'react'
import 'enl-styles/Login/RememberMe.css'

const RememberMe = ({ text }) => (
  <div className='RememberMe__Container hybrid-login-form '>
    <div className='RememberMe__Container__Input login-remember-me'>
      <input type='checkbox' name='rememberMe' id='rememberMe' value='true' />
      <label htmlFor='rememberMe'>
        <span className='RememberMe__Text'>{text.remember}</span>
      </label>
    </div>
    <a href='/' className='RememberMe__HelpLink'>{text.question}</a>
  </div>
)

export default RememberMe
