import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import BackgroundContainer from './Hero/BackgroundContainer'
import Background from './Hero/Background'
import InfoContainer from './Hero/InfoContainer'
import ImageTitle from './Hero/ImageTitle'
import DescriptionHero from './Hero/DescriptionHero'
import Buttons from './Hero/Buttons'
import MaturityNumber from './Hero/MaturityNumber'

const Hero = ({ heroDefault }) => {
  // FIXME
  // const { loading, data } = useQuery(querys.GET_HEROS)
  // if (loading) return <h1>LOADING...</h1>
  // const heros = (data ? data.Heros : [])
  // const random = Math.floor(Math.random() * heros.length)
  const hero = heroDefault//(data ? heros[random] : heroDefault)

  return (
    <HeroContainer>
      <BackgroundContainer>
        <Background ImgBackground={hero.background} />
        <MaturityNumber />
      </BackgroundContainer>
      <InfoContainer>
        <ImageTitle LogoSerie={hero.title_image} />
        <DescriptionHero Description={hero.synopsis} />
        <Buttons />
      </InfoContainer>
    </HeroContainer>
  )
}

export default Hero
