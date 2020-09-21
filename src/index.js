import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './layout/App'
import * as serviceWorker from './serviceWorker'
import { Store } from './component'
import './index.css'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()