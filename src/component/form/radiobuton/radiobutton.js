import React from 'react'

export function RadioButton({
  options,
  action,
  checked,
  label,
  name,
  type = 'checkbox',
  color = '',
  optionLabel = 'name',
  optionValue = 'id'
}) {
  const checkedAction = e => {
    const resp = e
    action({ target: { name: name, value: resp, type: type } })
  }

  const veryfiChecked = e => {
    return checked[optionValue] === e[optionValue] ? true : false
  }

  return (
    <div className={`form-box ${color} `}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        {options
          ? options.map(c => {
              return (
                <div
                  key={`${name}-${c[optionValue]}`}
                  className={`radio-box ${veryfiChecked(c) ? 'checked' : ''}`}
                  onClick={() => checkedAction(c)}
                >
                  <span className={type}></span>
                  {c[optionLabel]}
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}
