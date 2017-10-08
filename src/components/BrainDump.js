import React from 'react'

const BrainDump = props => (
  <div
    onClick={() => props.handleItemClick(props.item.id)}
    key={props.item.id}
    style={{ position: 'absolute', left: props.item.x, top: props.item.y }}
  >
    {props.item.text}
  </div>
)

export default BrainDump
