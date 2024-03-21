import React, { useEffect } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

function NewProduct() {
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')
    }

    loadOrders()
  }, [])

  return (
    <Container>
      <div>Novo Produto</div>
    </Container>
  )
}

export default NewProduct
