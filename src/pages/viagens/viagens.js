import React from 'react'
import { useSelector } from 'react-redux'
import Filtro from './filtro'
import './viagens.css'

export default () => {
  const forum = useSelector(state => state.viagensState.forum)
  return (
    <div className='box-viagens'>
      <div className='box-chamada'>
        <h1>Viaje pelo mundo inteiro</h1>
        <h3>Aqui você encontra os melhores voos do mundo</h3>
      </div>
      <Filtro />
      {/* <pre>{filtro}</pre> */}
      <div className='json-resposta'>
        <h4>VALOR DO FORM</h4>
        <span className='codigo'>
          <span>{'{'}</span>
          <span>{`"origem": ${forum.origem}`}</span>
          <span>{`"destino": ${forum.destino}`}</span>
          <span>{`"data": ${forum.data}`}</span>
          <span>{`"pessoas": ${forum.pessoas}`}</span>
          <span>{'}'}</span>
        </span>
      </div>
    </div>
  )
}
