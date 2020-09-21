import { combineReducers } from 'redux'
import appState from './layout/redux/AppReducer'
import alerts from './component/alert/alertsRedux'
import viagensState from './pages/viagens/redux/ViagensReducer'

export const rootReducer = combineReducers({
  alerts,
  appState,
  viagensState
})

export default rootReducer
