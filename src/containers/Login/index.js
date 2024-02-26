import React from 'react'
import { useForm } from 'react-hook-form'

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="logo-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-lopes-burger" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />

          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

          <Button type="submit">Entrar</Button>
        </form>

        <SignInLink>
          Não possui conta? <a>Cadastre aqui</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
