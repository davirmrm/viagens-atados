import React from 'react'
import AppRoutes from '../router'
import Header from './Header'
import './AppTema.css'
import './App.css'
import { Alert } from '../component'

export default () => {
  return (
    <>
      <Alert />
      <div className='box-app'>
        <Header />
        <AppRoutes />
      </div>
    </>
  )
}
