import React from 'react'
import { Button } from '../button/button'
import { history } from '../helpers'

export function Menu({ data }) {
  return (
    <div className='box-menu'>
      {data.map(item => {
        return (
          <Button
            key={`${item.id}-${item.url}`}
            color={item.color ? item.color : 'default'}
            type={item.type ? item.type : 'link'}
            variant={item.variant ? item.variant : 'normal'}
            action={() => history.push(item.url)}
          >
            {item.name}
          </Button>
        )
      })}
    </div>
  )
}
