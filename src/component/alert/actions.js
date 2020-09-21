export const ADD_ALERT = 'ADD_ALERT'
const addAlert = e => ({
  type: ADD_ALERT,
  payload: e
})

export const REMOVE_ALERT = 'REMOVE_ALERT'
const removeAlert = e => ({
  type: REMOVE_ALERT,
  payload: e
})

const verifyType = t => {
  switch (t) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'secondary'
    case 'warning':
      return 'warning'
    case 'danger':
      return 'error'
    case 'error':
      return 'error'
    case 'success':
      return 'success'
    default:
      return 'secondary'
  }
}

export const AddAlert = (t, m = 'Insira uma mensagem', h = 5000) => {
  const alert = { type: verifyType(t), mensage: m, time: h, id: Math.floor(Math.random() * 65536) }

  return dispatch => {
    dispatch(addAlert(alert))
  }
}

export const RemoveAlert = e => {
  return dispatch => {
    dispatch(removeAlert(e))
  }
}
