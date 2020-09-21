import { ATUALIZAR_CONTEUDO_FILTRO } from './ViagensActions'

const initialState = {
  filtro: {
    tipoIdaVolta: { id: '0', name: 'Ida e volta' },
    origem: '',
    destino: '',
    data: '',
    numeroPessoas: { id: '1', name: '1 pessoas' }
  },
  viagens: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ATUALIZAR_CONTEUDO_FILTRO:
      return {
        ...state,
        filtro: {
          ...state.filtro,
          [payload.target.name]: payload.target.value
        }
      }
    default:
      return state
  }
}
