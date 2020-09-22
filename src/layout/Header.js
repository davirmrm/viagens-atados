import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IcoLogo } from './logo'
import { Button, IcoMenu, Menu } from '../component'
import AppJSON from './app.json'
import './Header.css'
import useOutsideClick from '../component/useOusideClick/useoutsideclick'
import { menuOpen } from './redux/AppActions'

export default () => {
  const dispatch = useDispatch()
  const openMenu = useSelector(state => state.appState.menuOpen)

  const ref = useRef()
  useOutsideClick(ref, e => {
    dispatch(menuOpen(e))
  })

  return (
    <header className='box-header'>
      <div className='logo'>
        <IcoLogo />
      </div>
      <div className='menu-btn' ref={ref}>
        <Button type='btn' color='default' variant='outlined' action={() => dispatch(menuOpen(true))}>
          <IcoMenu />
        </Button>
      </div>

      <div className={`menu-box ${openMenu ? 'aberto' : ''}`}>
        <Menu data={AppJSON.menu} />
        <Menu data={AppJSON.menuLogout} />
      </div>
    </header>
  )
}
