import React from 'react'
import AppRoutes from '../router'
import Header from './Header'
import './AppTema.css'
import './App.css'

export default () => {
  return (
    <>
      <div className='app-background'></div>
      <div className='box-app'>
        <Header />
        <AppRoutes />
      </div>
    </>
  )
}
