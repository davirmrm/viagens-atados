import React from 'react'
import Portal from '../potal/portal'
import './modal.css'

import { IcoClose } from '../icon/icon'

export function Modal({ title = '', children, open = false, close = {}, closeText = 'Fechar', size = 'medium' }) {
  return (
    <Portal name='modal'>
      {open
        ? size === 'fullScreen'
          ? fulscren({ title, children, size, closeText, close })
          : modalNormal({ title, children, size, closeText, close })
        : null}
    </Portal>
  )
}

const fulscren = ({ title, children, closeText, close }) => {
  return (
    <div className={`box-modal fullScreen`}>
      <div className='modal-header'>
        {title}
        {children.map(e => {
          return e && e.type && e.type.name === 'ActionsModal' ? (
            <div key={e.type} className='modal-actions'>
              <button className='btn secondary normal' onClick={close}>
                {closeText}
              </button>
              {e}
            </div>
          ) : null
        })}
      </div>
      {children.map(e => {
        return e && e.type ? null : (
          <div key={e.type} className='modal-content'>
            {e}
          </div>
        )
      })}
    </div>
  )
}

const modalNormal = ({ title, children, size, closeText, close }) => {
  return (
    <div className={`box-modal`}>
      <div className={`size-${size}`}>
        <div className='modal-header'>
          {title}
          <button className='modal-close' onClick={close} title={closeText}>
            <IcoClose />
          </button>
        </div>

        {children.map((e, i) => {
          return e && e.type && e.type.name === 'ActionsModal' ? (
            <div key={e.type} className='modal-actions'>
              <button className='btn secondary normal' onClick={close}>
                {closeText}
              </button>
              {e}
            </div>
          ) : (
            <div key={e} className='modal-content'>
              {e}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function ActionsModal({ children }) {
  return children
}
