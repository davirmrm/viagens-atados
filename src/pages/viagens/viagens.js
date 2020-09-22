import React from 'react'
import { useSelector } from 'react-redux'
import Filtro from './filtro'
import './viagens.css'

export default () => {
  const filtro = useSelector(state => state.viagensState.filtro)
  return (
    <div className='box-viagens'>
      <div className='box-chamada'>
        <h1>Viaje pelo mundo inteiro</h1>
        <h3>Aqui você encontra os melhores voos do mundo</h3>
      </div>
      <Filtro />
      {/* <pre>{filtro}</pre> */}
    </div>
  )
}
