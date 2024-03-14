import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'
function PrivateRoute({ children, adminRequired = false }) {
  const user = localStorage.getItem('lopesburger:userData')

  if (!user) {
    return <Navigate to={'/login'} />
  }

  if (adminRequired && !JSON.parse(user).admin) {
    return <Navigate to={'/'} />
  }

  return children
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node,
  adminRequired: PropTypes.bool
}
