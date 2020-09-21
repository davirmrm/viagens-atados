import React from 'react'

export function ActionForm({ children, action, title = '', color = 'secondary', disabled = false }) {
  return (
    <button type='button' onClick={action} title={title} disabled={disabled}>
      {children}
    </button>
  )
}
