import { ATUALIZAR_CONTEUDO_FILTRO, ATUALIZAR_FORUM } from './ViagensActions'

const initialState = {
  filtro: {
    origem: '',
    destino: '',
    data: '',
    pessoas: ''
  },
  viagens: [],
  forum: {
    origem: '',
    destino: '',
    data: '',
    pessoas: ''
  }
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
    case ATUALIZAR_FORUM:
      return {
        ...state,
        forum: payload
      }
    default:
      return state
  }
}
