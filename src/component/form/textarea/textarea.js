import React from 'react'

export function Textarea({ children, action, value, label, name, color = '' }) {
  return (
    <div className={`form-box ${color} `}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        <textarea name={name} id={`id-${name}`} onChange={action}>
          {value}
        </textarea>

        {children && children.length ? (
          children.map(e => {
            return e && e.type && e.type.name === 'ActionForm' ? e : null
          })
        ) : children && children.type && children.type.name === 'ActionForm' ? (
          <div className='textarea-actions'>{children}</div>
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
