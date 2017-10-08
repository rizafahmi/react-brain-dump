import React from 'react'

const BrainDump = props => (
  <div
    onClick={() => console.log(`${props.item.id} click`)}
    key={props.item.id}
    style={{ position: 'absolute', left: props.item.x, top: props.item.y }}
  >
    {props.item.text}
  </div>
)

export default BrainDump
