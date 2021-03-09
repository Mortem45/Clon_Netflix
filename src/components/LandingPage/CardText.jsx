import React from 'react'
import 'enl-styles/LandingPage/CardText.css'

const CardText = ({ children, data }) => (
  <div className='Card__Text'>
    <h1 className='Card__Title'>
      {data.title}
    </h1>
    <h2 className='Card__Subtitle'>
      {data.subtitle}
    </h2>
    {children}
  </div>
)

export default CardText
