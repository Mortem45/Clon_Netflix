import React, { Component } from 'react'
import Container from 'enl-components/utils/Container'
import Header from 'enl-components/LandingPage/Header'
import Landing from 'enl-components/LandingPage/Landing'
import Card from 'enl-components/LandingPage/Card'
import Hero from 'enl-components/LandingPage/Hero'
import CardText from 'enl-components/LandingPage/CardText'
import Button from 'enl-components/LandingPage/Button'
import IlustrationRigth from 'enl-components/LandingPage/IlustrationRigth'
import IlustrationLeft from 'enl-components/LandingPage/IlustrationLeft'
import Footer from 'enl-components/LandingPage/Footer'
// TODO fixap
import data from '../api/dataLandingPage.json'
import 'enl-styles/App.css'
import 'enl-styles/Fonts.css'

export default class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Header signin={data.signin} logo={data.logo}/>
        <Landing>
          <Card style={'hero'}>
            <Hero hero={data.cards.hero} />
            <CardText data={data.cards.hero}>
              <Button text={data.button_free} />
            </CardText>
          </Card>
          <Card style={'watchOnTv'}>
            <CardText data={data.cards.watchOnTv} />
            <IlustrationRigth data={data.cards.watchOnTv} />
          </Card>
          <Card style={'downloadAndWatch'}>
            <CardText data={data.cards.downloadAndWatch} />
            <IlustrationLeft data={data.cards.downloadAndWatch} />
          </Card>
          <Card style={'watchOnDevice'}>
            <CardText data={data.cards.watchOnDevice}/>
            <IlustrationRigth data={data.cards.watchOnDevice} />
          </Card>
          <Card style={'footer'}>
            <Footer footer={data.cards.footer} />
          </Card>
        </Landing>
      </Container>
    )
  }
}
