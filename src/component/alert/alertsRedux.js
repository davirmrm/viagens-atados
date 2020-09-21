import { ADD_ALERT, REMOVE_ALERT } from './actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter(alert => {
        return alert.id !== payload
      })

    default:
      return state
  }
}
