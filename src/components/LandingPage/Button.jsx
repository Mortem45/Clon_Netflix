/* eslint-disable react/prop-types */
import React from 'react'
import 'enl-styles/LandingPage/Button.css'
import 'enl-styles/utils/Button.css'

const Button = ({ text }) => (
  <div className='Button__Container'>
    <button className='Button Button__Large Button__Red Button__Extra__large'>
      <span>
        {text}
      </span>
      <span>
        &nbsp; >
      </span>
    </button>
  </div>
)

export default Button
