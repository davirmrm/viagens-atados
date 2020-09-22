import React from 'react'
import { IcoLogo } from './logo'
import { Button, IcoMenu, Menu } from '../component'
import AppJSON from './app.json'
import './Header.css'

export default () => {
  return (
    <header className='box-header'>
      <div className='logo'>
        <IcoLogo />
      </div>
      <Button type='btn' color='default' variant='outlined'>
        <IcoMenu />
      </Button>
      <div className='menu-box'>
        <Menu data={AppJSON.menu} />
        <Menu data={AppJSON.menuLogout} />
      </div>
    </header>
  )
}
