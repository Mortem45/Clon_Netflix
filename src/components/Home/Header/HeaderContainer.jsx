import React from 'react'
import 'enl-styles/Home/Header/HeaderContainer.css'

const HeaderContainer = ({ children }) => (
  <div className='Home__Header__Container'>
    <div className='Home__Header__Cont'>
      <div className='Home__Header'>
        {children}
      </div>
    </div>
  </div>
)

export default HeaderContainer
