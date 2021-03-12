import React from 'react'
import 'enl-styles/Home/Previewmedia/Modal.css'

const ContainerModal = ({ children }) => (
  <div className='ContainerModal' tabIndex='-1'>
    <div className='Modal' tabIndex='-1'>
      {children}
    </div>
  </div>
)

export default ContainerModal
