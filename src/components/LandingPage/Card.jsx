import React from 'react'
import 'enl-styles/LandingPage/Card.css'

const Card = ({ children, style }) => (
  <div className='Card'>
    <div className={`${style}`}>
      {children}
    </div>
  </div>
)

export default Card
