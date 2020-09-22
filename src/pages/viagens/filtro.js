import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Data,
  IcoCalendario,
  IcoImagem,
  IcoLocalizacao,
  IcoPesquisar,
  IcoPessoa,
  IcoSearch,
  Input
} from '../../component'
import { RadioButton } from '../../component/form/radiobuton/radiobutton'
import { atualizarFiltro } from './redux/ViagensActions'

export default () => {
  const dispatch = useDispatch()
  const [tipoIdaVolta, setTipoIdaVolta] = useState({ id: '0', name: 'Ida e volta' })

  const locales = useSelector(state => state.appState.idioma)
  const defaltText = require(`./nls/${locales}.json`)
  const filtro = useSelector(state => state.viagensState.filtro)

  const selectIdaVolta = [
    { id: '0', name: 'Ida e volta' },
    { id: '1', name: 'Só ida' },
    { id: '2', name: 'Só volta' }
  ]
  const textoData = ['Ida / Retorno', 'Ida', 'Retorno']

  return (
    <div className='box-filtro'>
      <div className='row'>
        <RadioButton
          label=''
          name='tipoIdaVolta'
          action={e =>
            dispatch([setTipoIdaVolta(e.target.value), atualizarFiltro({ target: { name: 'data', value: '' } })])
          }
          checked={tipoIdaVolta}
          options={selectIdaVolta}
          className='col-12'
        />
      </div>
      <div className='row'>
        <Input
          label='Origem'
          name='origem'
          action={e => dispatch(atualizarFiltro(e))}
          value={filtro.origem}
          before={<IcoImagem />}
          className='col-3'
        />
        <Input
          label='Destino'
          name='destino'
          action={e => dispatch(atualizarFiltro(e))}
          value={filtro.destino}
          before={<IcoLocalizacao />}
          className='col-3'
        />
        <div className='col-3'>
          <Data
            label={'Data de ' + textoData[tipoIdaVolta.id]}
            name='data'
            action={e => dispatch(atualizarFiltro(e))}
            value={filtro.data}
            before={<IcoCalendario />}
            inicioFim={tipoIdaVolta.id === '0' ? true : false}
          />
        </div>
        <Input
          label='Número de pessoas'
          name='pessoas'
          type='number'
          action={e => dispatch(atualizarFiltro(e))}
          value={filtro.pessoas}
          before={<IcoPessoa />}
          className='col-3'
        />
      </div>
      <div className='box-btn'>
        <Button color='primary' action={() => console.log(filtro)} variant='normal'>
          <IcoPesquisar /> Busque as viagens
        </Button>
      </div>
    </div>
  )
}
