import React from 'react'
import PreviewMedia from '../PreviewMedia'
import 'enl-styles/Home/List/ListContent.css'

const ListContent = ({ children, showModal, clss, handlerCloseModal }) => (
  <div className='ListContent__Container'>
    <div className={`ListContent ${clss}`}>
      {children}
      {showModal ? <PreviewMedia info={showModal} handlerCloseModal={handlerCloseModal} /> : <div />}
    </div>
  </div>
)

export default ListContent
