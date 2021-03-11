import React from 'react'
import 'enl-styles/Home/Media/MediaContainer.css'

const MediaContainer = ({ children, handleClick }) => (
  <div className='MediaContainer__Cont' onClick={handleClick}>
    <div className='MediaContainer'>
      {children}
    </div>
  </div>
)

export default MediaContainer
