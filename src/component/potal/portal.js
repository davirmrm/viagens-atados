import React from 'react'
import ReactDOM from 'react-dom'

export default props => {
  const Portal = ({ children }) => {
    let nameRandom = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    let modalRoot = document.getElementById(`root-${props.name}`)
    if (!modalRoot) {
      const tempEl = document.createElement('div')
      tempEl.id = `root-${props.name ? props.name : nameRandom}`
      document.body.append(tempEl)
      modalRoot = tempEl
    }
    return ReactDOM.createPortal(children, modalRoot)
  }
  return <Portal>{props.children}</Portal>
}
