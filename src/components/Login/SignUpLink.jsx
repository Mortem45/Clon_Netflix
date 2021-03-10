import React from 'react'
import 'enl-styles/Login/SignUpLink.css'

const SignUpLink = ({ signup }) => (
  <div className='SignUpLink__Container'>
    <form method='post' className='SignUpLink__Form_Login' action=''>
      <div className='SignUpLink__FB__Login'>
        <button className='SignUpLink__Button' type='submit'>
          <div className='SignUpLink__Container__Img'>
            <img className='SignUpLink__Icon' src={signup.logo_fb} />
            <span className='SignUpLink__Icon__Text'>{signup.login_fb}</span>
          </div>
        </button>
      </div>
    </form>
    <div className='SignUpLink__SignUp'>{signup.question} <a href='/'>{signup.signup}</a>.</div>
  </div>
)

export default SignUpLink
