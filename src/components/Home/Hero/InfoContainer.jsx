import React from 'react'
import 'enl-styles/Home/Hero/InfoContainer.css'

const InfoContainer = ({ children }) => (
  <div className='InfoContainer_Container'>
    <div className='InfoContainer'>
      {children}
    </div>
  </div>
)

export default InfoContainer
