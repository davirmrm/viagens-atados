import React from 'react'

export function Input({
  children,
  action,
  value,
  label,
  name,
  type = 'text',
  color = '',
  disabled = false,
  before = '',
  className = ''
}) {
  return (
    <div className={`form-box ${color} ${className}`}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        {before ? <span className='before-input'>{before}</span> : null}
        <input
          style={{ paddingLeft: before ? '35px' : null }}
          type={type}
          name={name}
          id={`id-${name}`}
          value={value}
          onChange={action}
          disabled={disabled}
        />

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
