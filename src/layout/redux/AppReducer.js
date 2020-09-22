import { CARREGANDO_ALERT, MENU_STATUS } from './AppActions'

const initialState = {
  alerts: [],
  idioma: 'pt-BR',
  menuOpen: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CARREGANDO_ALERT:
      return { ...state, alerts: payload }
    case MENU_STATUS:
      return { ...state, menuOpen: payload }
    default:
      return state
  }
}
