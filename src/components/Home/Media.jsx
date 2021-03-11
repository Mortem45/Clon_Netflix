import React from 'react'
import MediaContainer from './Media/MediaContainer'
import MediaBoxArt from './Media/MediaBoxArt'

const Media = (props) => {
  const { handlerOpenModal, boxart, fatherId } = props

  const handleClick = event => {
    handlerOpenModal(props, fatherId)
  }

  return (
    <MediaContainer handleClick={handleClick}>
      <MediaBoxArt image={boxart} />
    </MediaContainer>
  )
}

export default Media
