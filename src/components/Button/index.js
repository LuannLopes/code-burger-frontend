import propTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

function Button({ children, ...rest }) {
  return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default Button

Button.propTypes = {
  children: propTypes.string
}
