import React from 'react'

const LoginLabel = ({ children, text, error }) => (
  <div className='LoginBodyFormPrincipal__Input__Container'>
    <div className='LoginBodyFormPrincipal__Input__Container2'>
      <div className='LoginBodyFormPrincipal__Input__Container3'>
        {children}
      </div>
    </div>
    {!error ? '' : <div className='LoginBodyFormPrincipal__Input__Error'>{text}</div>}
  </div>
)

export default LoginLabel
