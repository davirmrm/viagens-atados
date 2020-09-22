import React, { useRef, useState } from 'react'
import useOutsideClick from '../../useOusideClick/useoutsideclick'
import { Calendario } from './calendario'

export function Data({
  children,
  action,
  value,
  label,
  name,
  type = 'text',
  color = '',
  disabled = false,
  before = '',
  className = '',
  inicioFim = false
}) {
  const [openCalendario, setOpenCalendario] = useState(false)
  const [selecionado, setSelecionado] = useState({ dataInicio: '', dataFim: '' })

  const itemData = e => {
    if (selecionado.dataInicio === '') {
      return 'dataInicio'
    } else if (selecionado.dataFim === '') {
      return 'dataFim'
    }

    if (selecionado.dataInicio !== '' && e < selecionado.dataInicio) {
      return 'dataInicio'
    } else {
      if (selecionado.dataFim !== '' && e > selecionado.dataFim) {
        return 'dataFim'
      } else {
        return 'dataInicio'
      }
    }
  }

  const handleData = e => {
    setSelecionado({
      ...selecionado,
      [inicioFim ? itemData(e) : 'dataInicio']: e
    })

    action({
      target: {
        name: name,
        value: inicioFim
          ? `${itemData(e) === 'dataInicio' ? e : selecionado.dataInicio} - ${
              itemData(e) === 'dataFim' ? e : selecionado.dataFim
            }`
          : e
      }
    })
  }

  const ref = useRef()
  useOutsideClick(ref, e => {
    setOpenCalendario(e)
  })

  return (
    <div ref={ref} className={`form-box ${color} ${className}`}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        {before ? <span className='before-input'>{before}</span> : null}
        {/* <input
          style={{ paddingLeft: before ? '35px' : null }}
          type={type}
          name={name}
          id={`id-${name}`}
          defaultValue={value}
          onClick={() => setOpenCalendario(!openCalendario)}
          disabled={disabled}
        /> */}
        <button
          style={{ paddingLeft: before ? '35px' : null }}
          className='select-selected '
          onClick={() => setOpenCalendario(!openCalendario)}
        >
          {value ? value : 'Selecione uma data'}
        </button>
        {openCalendario ? (
          <Calendario action={e => handleData(e)} dataInicio={selecionado.dataInicio} dataFim={selecionado.dataFim} />
        ) : null}
        {children && children.length ? (
          children.map(e => {
            return e && e.type && e.type.name === 'ActionForm' ? e : null
          })
        ) : children && children.type && children.type.name === 'ActionForm' ? (
          <div className='input-actions'>{children}</div>
        ) : null}
      </div>
      {children && children.length
        ? children.map(e => {
            return e && e.type && e.type.name !== 'ActionForm' ? e : null
          })
        : children && children.type && children.type.name !== 'ActionForm'
        ? children
        : null}
    </div>
  )
}
