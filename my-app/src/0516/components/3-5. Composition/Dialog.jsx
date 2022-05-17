import React from 'react'
// 모든 Dialog에 일괄적으로 동작해야 하는 것들이 포함됨

export default function Dialog(props) {
  return (
    <div style={{backgroundColor: 'pink'}}>
      {props.children}
    </div>
  )
}
