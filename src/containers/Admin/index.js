import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname } = useLocation()
  return (
    <Container>
      <SideMenuAdmin path={pathname} />
      <ContainerItems>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}
