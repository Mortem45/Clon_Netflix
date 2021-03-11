import React from 'react'
import 'enl-styles/Home/Previewmedia/BackgroundImage.css'

const BackgroundImage = ({ image }) => {
  const style = {
    backgroundImage: `url(${image})`
  }
  return (
    <div className='BackgroundImage__Container'>
      <div className='BackgroundImage__Image' style={style} />
    </div>
  )
}

export default BackgroundImage
