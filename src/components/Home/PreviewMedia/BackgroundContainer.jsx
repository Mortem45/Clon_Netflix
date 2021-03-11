import React from 'react'
import 'enl-styles/Home/Previewmedia/BackgroundContainer.css'

// TODO url css
const BackgroundContainer = ({ children }) => (
  <div className='BackgroundContainer'>
    {children}
    <div className='BackgroundContainer__Vignette' />
    <div className='BackgroundContainer__NavShadow' />
  </div>
)

export default BackgroundContainer
