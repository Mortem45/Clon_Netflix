import React from 'react'
import 'enl-styles/Home/Previewmedia/PreviewInfoContentContainer.css'

const PreviewInfoContentContainer = ({ children }) => (
  <div className='PreviewInfoContent__Container'>
    <div className='PreviewInfoContent__1'>
      <div className='PreviewInfoContent__2'>
        <div className='PreviewInfoContent__3'>
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default PreviewInfoContentContainer
