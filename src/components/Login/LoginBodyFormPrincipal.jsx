import React from 'react'
import LoginLabel from './LoginLabel'
import RememberMe from './RememberMe'
import 'enl-styles/Login/LoginBodyFormPrincipal.css'

const LoginBodyFormPrincipal = ({ form, handleSubmit, error }) => (
  <div className='LoginBodyFormPrincipal__Container'>
    <h1>{form.sing_in}</h1>
    <form id='loginForm' className='LoginBodyFormPrincipal__Form' onSubmit={handleSubmit}>
      <LoginLabel text={form.errors.email_error} error={error}>
        <label className='LoginBodyFormPrincipal__Label'>
          <input id='email' name='email' className='LoginBodyFormPrincipal__Input' type='text' />
          <label htmlFor='email' className='LoginBodyFormPrincipal__Input__Label2'>{form.labels.email}</label>
        </label>
      </LoginLabel>
      <LoginLabel text={form.errors.password_error} error={error}>
        <label className='LoginBodyFormPrincipal__Input__Label'>
          <input id='password' name='password' className='LoginBodyFormPrincipal__Input' type='password' />
          <label htmlFor='password' className='LoginBodyFormPrincipal__Input__Label2'>{form.labels.password}</label>
        </label>
      </LoginLabel>
      <button className='LoginBodyFormPrincipal__Button' type='submit'>{form.sing_in}</button>
      <RememberMe text={form.remember_me} />
    </form>
  </div>
)

export default LoginBodyFormPrincipal
