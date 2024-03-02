import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'
function PrivateRoute({ children }) {
  const user = localStorage.getItem('lopesburger:userData')

  return user ? children : <Navigate to={'/login'} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node
}
