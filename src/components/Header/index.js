import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
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

  useEffect(() => {}, [location])

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
          <p>Olá, Luan</p>
          <PageLinkExit onClick={() => navigate('/login')}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
