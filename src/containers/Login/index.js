import React from 'react'

import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink
} from './style'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="logo-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-lopes-burger" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>
        <SignInLink>
          Não possui conta? <a>Cadastre aqui</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
