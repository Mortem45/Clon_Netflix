import React from 'react'
import 'enl-styles/LandingPage/Header.css'

const Header = ({ signin, logo }) => (
  <div className='Header__Container'>
    <div className='Header'>
      <img className='Header__Logo' src={logo} />
      <a className='Header__Auth' href='/login'>{signin}</a>
    </div>
  </div>
)

export default Header
