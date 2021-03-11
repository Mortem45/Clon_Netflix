import React from 'react'
import 'enl-styles/Home/List/ListTile.css'

const ListTitle = ({ title }) => (
  <h2 className='ListTitle__Container'>
    <span className='ListTitle rowTitle'>
      <div className='ListTitle__Text row-header-title'>{title}</div>
    </span>
  </h2>
)

export default ListTitle
