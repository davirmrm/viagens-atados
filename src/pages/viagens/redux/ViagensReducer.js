import { ATUALIZAR_CONTEUDO_FILTRO } from './ViagensActions'

const initialState = {
  filtro: {
    origem: '',
    destino: '',
    data: '',
    pessoas: ''
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
