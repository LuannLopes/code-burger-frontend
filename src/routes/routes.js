import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from '../components'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import paths from './../constants/paths'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Header />
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Header />
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Header />
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Order}
          element={
            <PrivateRoute adminRequired>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Products}
          element={
            <PrivateRoute adminRequired>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.NewProduct}
          element={
            <PrivateRoute adminRequired>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default MyRoutes
