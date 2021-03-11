import React from 'react'
import PreviewMediaInfoTitle from './PreviewMediaInfoTitle'
import PreviewInfoContent from './PreviewInfoContent'
import 'enl-styles/Home/Previewmedia/PreviewMediaInfo.css'

const PreviewMediaInfo = ({ image, info }) => (
  <div className='PreviewMediaInfo'>
    <PreviewMediaInfoTitle image={image} />
    <PreviewInfoContent info={info} />
  </div>
)

export default PreviewMediaInfo
