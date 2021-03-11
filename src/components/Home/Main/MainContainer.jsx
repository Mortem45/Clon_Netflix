import React from 'react'
import 'enl-styles/Home/Main/MainContainer.css'

const MainContainer = ({ children }) => (
  <div className='Main__Container'>
    <div className='MainContainer'>
      {children}
    </div>
  </div>
)

export default MainContainer
