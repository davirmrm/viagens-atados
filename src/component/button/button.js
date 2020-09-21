import React from 'react'
import './button.css'

export function Button({
  children,
  action,
  type = 'btn',
  color = 'secondary',
  variant = 'normal',
  size = 'medium',
  title = '',
  disabled = false
}) {
  return (
    <button
      className={`${type} ${color} ${variant} ${size} `}
      onClick={action}
      title={title ? title : children}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
