import React from 'react'
import PreviewInfoContentContainer from './PreviewInfoContentContainer'
import PreviewMediaInfoCreators from './PreviewMediaInfoCreators'
import PreviewMediaInfoSynopsis from './PreviewMediaInfoSynopsis'
import PreviewMediaInfoWatched from './PreviewMediaInfoWatched'
import PreviewMediaInfoEstat from './PreviewMediaInfoEstat'

const PreviewInfoContent = ({ info }) => (
  <PreviewInfoContentContainer>
    <PreviewMediaInfoEstat info={info} />
    <PreviewMediaInfoWatched duration={info.duration} title={info.title} type={info.type} />
    <PreviewMediaInfoSynopsis synopsis={info.synopsis} />
    <PreviewMediaInfoCreators info={info} />
  </PreviewInfoContentContainer>
)

export default PreviewInfoContent
