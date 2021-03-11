import React from 'react'
import 'enl-styles/Home/Previewmedia/PreviewMediaInfoTitle.css'

const PreviewMediaInfoTitle = ({ image }) => (
  <h3>
    <a className='PreviewMediaInfoTitle__Link' href='#'>
      <div className='PreviewMediaInfoTitle'>
        <img className='PreviewMediaInfoTitle__Logo' src={image} />
      </div>
    </a>
  </h3>
)

export default PreviewMediaInfoTitle
