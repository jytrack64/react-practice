import React from 'react'
import Dialog from './Dialog'
// title이나 description을 써야 한다면

export default function CustomDialog(props) {
  return (
    <Dialog>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </Dialog>
  )
}
