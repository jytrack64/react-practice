import React from 'react'
import ThankyouDialog from './ThankyouDialog';
import {createPortal} from "react-dom"

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
}

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{position: "absolute"}}>
        <button>하하하...</button>
      </div>
    </div>
  )
}
