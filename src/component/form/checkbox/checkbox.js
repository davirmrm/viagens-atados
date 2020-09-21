import React from 'react'

export function Checkbox({
  options,
  action,
  checked,
  label,
  name,
  type = 'checkbox',
  color = '',
  text = '',
  disabled = false,
  optionLabel = 'name',
  optionValue = 'id'
}) {
  const veryfiCheck = e => {
    const verify = checked.filter(elem => {
      return elem[optionValue] === e[optionValue] ? elem : null
    })

    const res = checked.filter(elem => {
      return elem[optionValue] !== e[optionValue] ? elem : null
    })

    if (checked.length === 0) {
      return [e]
    } else {
      if (verify.length === 0) {
        return checked.concat(e)
      } else {
        return res
      }
    }
  }

  const checkedAction = e => {
    const resp = options ? (e ? veryfiCheck(e) : []) : e
    action({ target: { name: name, value: resp, type: type } })
  }

  const veryfiChecked = e => {
    if (!options) {
      return checked[optionValue] === e[optionValue] ? true : false
    } else {
      if (checked.length === 0) {
        return false
      } else {
        const verify = checked.filter(elem => {
          return elem[optionValue] === e[optionValue] ? elem : null
        })

        if (verify.length === 0) {
          return false
        } else {
          return (verify[0] && verify[0][optionValue]) === e[optionValue] ? true : false
        }
      }
    }
  }

  return (
    <div className={`form-box ${color} `}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        {options ? (
          options.map(c => {
            return (
              <div
                key={`${name}-${c[optionValue]}`}
                className={`check-box ${veryfiChecked(c) ? 'checked' : ''}`}
                onClick={() => checkedAction(!disabled ? c : null)}
              >
                <span className={type}></span>
                {c[optionLabel]}
              </div>
            )
          })
        ) : (
          <div
            className={`check-box ${checked ? 'checked' : ''}`}
            onClick={() => checkedAction(!disabled ? !checked : false)}
          >
            <span className={type}></span>
            {text}
          </div>
        )}
      </div>
    </div>
  )
}
