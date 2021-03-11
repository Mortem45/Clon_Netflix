import React from 'react'
import PreviewMediaContainer from './PreviewMedia/PreviewMediaContainer'
import Background from './PreviewMedia/Background'
import PreviewMediaInfo from './PreviewMedia/PreviewMediaInfo'

const PreviewMedia = ({ info, handlerCloseModal }) => (
  <PreviewMediaContainer>
    <Background background={info.background} />
    <PreviewMediaInfo image={info.title_image} info={info} />
    <button className='PreviewMediaContainer__Button__Icon' onClick={handlerCloseModal} />
  </PreviewMediaContainer>
)

export default PreviewMedia
