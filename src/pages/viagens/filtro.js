import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, IcoSearch, Input, Select } from '../../component'
import { RadioButton } from '../../component/form/radiobuton/radiobutton'
import { atualizarFiltro } from './redux/ViagensActions'

export default () => {
  const dispatch = useDispatch()

  const locales = useSelector(state => state.appState.idioma)
  const defaltText = require(`./nls/${locales}.json`)
  const filtro = useSelector(state => state.viagensState.filtro)

  const selectIdaVolta = [
    { id: '0', name: 'Ida e volta' },
    { id: '1', name: 'Só ida' },
    { id: '2', name: 'Só volta' }
  ]
  const selectNPessoas = [
    { id: '1', name: '1 pessoa' },
    { id: '2', name: '2 pessoas' },
    { id: '3', name: '3 pessoas' },
    { id: '4', name: '4 pessoas' },
    { id: '5', name: '5 pessoas' },
    { id: '6', name: '6 pessoas' },
    { id: '7', name: '7 pessoas' }
  ]
  return (
    <div className='box-filtro'>
      <RadioButton
        label=''
        name='tipoIdaVolta'
        action={e => dispatch(atualizarFiltro(e))}
        checked={filtro.tipoIdaVolta}
        options={selectIdaVolta}
      />
      <Input label='Origem' name='origem' action={e => dispatch(atualizarFiltro(e))} value={filtro.origem} />
      <Input label='Destino' name='destino' action={e => dispatch(atualizarFiltro(e))} value={filtro.destino} />
      <Input label='Data de Ida / Retorno' name='data' action={e => dispatch(atualizarFiltro(e))} value={filtro.data} />
      <Select
        label='Número de pessoas'
        name='numeroPessoas'
        action={e => dispatch(atualizarFiltro(e))}
        options={selectNPessoas}
        selected={filtro.numeroPessoas}
      />
      <Button color='primary' variant='normal'>
        <IcoSearch /> Busque as viagens
      </Button>
    </div>
  )
}
