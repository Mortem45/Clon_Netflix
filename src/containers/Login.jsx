import React,{ Component } from 'react'
import LoginContainer from 'enl-components/Login/LoginContainer'
import LoginBackground from 'enl-components/Login/LoginBackground'
import LoginHeader from 'enl-components/Login/LoginHeader'
import LoginBodyContainer from 'enl-components/Login/LoginBodyContainer'
import LoginBodyFormPrincipal from 'enl-components/Login/LoginBodyFormPrincipal'
import FooterContainer from 'enl-components/Login/FooterContainer'
import Footer from 'enl-components/LandingPage/Footer'
import SignUpLink from 'enl-components/Login/SignUpLink'
import data from '../api/dataLogin.json'
import 'enl-styles/Login/Login.css'

export default class LandingPage extends Component {
  render() {
    const handlerForm = async (event) => {
      console.log(click)
      event.preventDefault()
    }

    return (
      <LoginContainer>
        <LoginBackground images={data.background} />
        <LoginHeader logo={data.logo} />
        <LoginBodyContainer>
          <LoginBodyFormPrincipal form={data.form_principal} handleSubmit={handlerForm} />
          <SignUpLink signup={data.sign_up} />
        </LoginBodyContainer>
        <FooterContainer>
          <Footer footer={data.footer} />
        </FooterContainer>
      </LoginContainer>
    )
  }
}

