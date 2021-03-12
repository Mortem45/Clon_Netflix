import React from 'react'
import Modal from 'enl-components/Home/PreviewMedia/Modal'
import PreviewContainer from 'enl-components/Home/PreviewMedia/PreviewContainer'
import PreviewVideo from 'enl-components/Home/PreviewMedia/PreviewVideo'
import PreviewImage from 'enl-components/Home/PreviewMedia/PreviewImage'

PreviewImage


const PreviewMedia = ({ info, handlerCloseModal }) => (
  <Modal>
    <PreviewContainer>
      <PreviewImage />
      soy modal
    </PreviewContainer>
  </Modal>
)

export default PreviewMedia
