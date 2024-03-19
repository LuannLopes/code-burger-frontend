import React from 'react'

import { SideMenuAdmin } from '../../components'
// import Orders from './Orders'
import ListProducts from './ListProducts'
import { Container } from './styles'

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ListProducts />
      {/* <Orders /> */}
    </Container>
  )
}
