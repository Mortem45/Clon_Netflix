import React from 'react'
import 'enl-styles/Home/Previewmedia/PreviewMediaContainer.css'

const PreviewMediaContainer = ({ children }) => (
  <div className='PreviewMedia__Container'>
    <div className='PreviewMedia__Container__Open'>
      <div className='PreviewMedia__Content'>
        <div className='PreviewMedia'>
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default PreviewMediaContainer
