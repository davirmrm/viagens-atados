import React from 'react'
import { IcoLogo } from './logo'
import { Menu } from '../component'
import AppJSON from './app.json'
import './Header.css'

export default () => {
  return (
    <header className='box-header'>
      <div className='logo'>
        <IcoLogo />
      </div>
      <div>
        <Menu data={AppJSON.menu} />
        <Menu data={AppJSON.menuLogout} />
      </div>
    </header>
  )
}
