import React from 'react'
import './list.css'

export function List({ head = [], data = [], listCustom = () => null, children }) {
  return (
    <table className='list-box'>
      <thead>
        <tr>
          {head.map(header => {
            return (
              <td className={header.className} key={header.colunm}>
                {header.text}
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data.map(container => {
          return (
            <tr key={container.id}>
              {head.map(header => {
                return (
                  <td className={header.className} key={`${container.id}-${header.colunm}`}>
                    {container[header.colunm] ? container[header.colunm] : listCustom(container, header.colunm)}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
