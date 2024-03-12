import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  Line,
  PageLink,
  PageLinkExit
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout, userData } = useUser()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() => navigate('/')}
          isActive={location.pathname === '/'}
        >
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/products')}
          isActive={location.pathname.includes('/products')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => navigate('/cart')}>
          <img src={Cart} alt="logo-carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink onClick={() => navigate('/')}>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
