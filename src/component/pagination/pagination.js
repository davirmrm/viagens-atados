import React, { useState } from 'react'
import './pagination.css'
import { Button } from '../button/button'
// import { IcoArrowForward, IcoArrowBack, IcoSpinner } from '../icon'

const textDefault = {
  de: 'de',
  paginas: 'páginas',
  itens: 'registros',
  next: 'Próximo',
  before: 'Anterior',
  reload: 'Atualizar'
  // next: <IcoArrowForward />,
  // before: <IcoArrowBack />,
  // reload: <IcoSpinner />
}
export function Paginate({ data = { pageNumber: 0, totalPages: 1, totalElements: 0 }, action, text = textDefault }) {
  const [paginateTemp, setPaginateTemp] = useState(String(data.pageNumber ? data.pageNumber : 0 + 1))

  const changePaginate = event => {
    setPaginateTemp(event.target.value)
  }

  const reloadPaginate = event => {
    if (event || event === 0) {
      if (event <= data.totalPages) {
        setPaginateTemp(event + 1)
        action(event)
      }
    } else if (paginateTemp >= 1 && paginateTemp <= data.totalPages) {
      action(Number(paginateTemp - 1))
    } else {
      setPaginateTemp(data.pageNumber + 1)
    }
  }

  return (
    <div className='pagination-custom'>
      <Button
        type='btn circle'
        color='secondary'
        action={() => reloadPaginate(data.pageNumber - 1)}
        disabled={data.pageNumber === 0 ? true : false}
      >
        {text.before}
      </Button>
      <div className='page-item'>
        <input type='number' name='paginate' value={paginateTemp} onChange={event => changePaginate(event)} />
        <Button
          type='btn circle'
          color='secondary'
          action={() => reloadPaginate()}
          disabled={data.totalElements === 0 ? true : false}
        >
          {text.reload}
        </Button>
      </div>

      <Button
        type='btn circle'
        color='secondary'
        action={() => reloadPaginate(data.pageNumber + 1)}
        disabled={data.pageNumber >= data.totalPages - 1 ? true : false}
      >
        {text.next}
      </Button>

      <span className='pagination-info'>
        {`${data.pageNumber + 1} ${text.de} ${data.totalPages} ${text.paginas}`}
        {` - ${data.totalElements} ${text.itens}`}
      </span>
    </div>
  )
}
