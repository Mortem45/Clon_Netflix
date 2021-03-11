import React from 'react'
import 'enl-styles/Home/Hero/HeroContainer.css'

const HeroContainer = ({ children }) => (
  <div className='Hero__Container'>
    <div className='Hero'>
      {children}
    </div>
  </div>
)

export default HeroContainer
