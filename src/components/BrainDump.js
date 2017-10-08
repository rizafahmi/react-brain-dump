import React from 'react'
import propTypes from 'prop-types'
import './BrainDump.css'

const BrainDump = props => (
  <div
    className='item'
    onClick={() => props.handleItemClick(props.item.id)}
    key={props.item.id}
    style={{ position: 'absolute', left: props.item.x, top: props.item.y }}
  >
    {props.item.text}
  </div>
)

BrainDump.PropTypes = {
  item: propTypes.object.isRequired,
  key: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
}

export default BrainDump
