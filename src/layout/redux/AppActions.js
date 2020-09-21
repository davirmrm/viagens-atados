export const CARREGANDO_ALERT = 'CARREGANDO_ALERT'
const setCarrengando = alert => ({
  type: CARREGANDO_ALERT,
  payload: alert
})

export const listarAlerts = id => {
  const JsonTest = [
    { type: 'success', mensage: 'Alerta mensagem', time: 3000 },
    { type: 'success', mensage: 'Alerta mensagem 1', time: 3000 },
    { type: 'success', mensage: 'Alerta mensagem 2', time: 3000 }
  ]
  return dispatch => {
    dispatch(setCarrengando(JsonTest))
  }
}
