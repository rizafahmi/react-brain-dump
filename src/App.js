import React, { Component } from 'react'
import nanoid from 'nanoid'
import _ from 'lodash'

import BrainDump from './components/BrainDump'

class App extends Component {
  constructor () {
    super()

    this.state = {
      editMode: false,
      text: '',
      currentItem: null,
      items: [
        {
          text: 'Brain dump',
          x: 400,
          y: 100,
          id: nanoid(10)
        }
      ]
    }
  }
  handleChange (e) {
    if (e.key === 'Enter' && this.state.editMode === false) {
      this.newItem()
    } else if (e.key === 'Enter' && this.state.editMode === true) {
      this.editItem()
    }
  }
  newItem () {
    const { text, items } = this.state
    const newItem = {
      id: nanoid(10),
      text,
      x: items[items.length - 1].x,
      y: items[items.length - 1].y + 30
    }
    this.setState({
      items: [...items, newItem],
      text: '',
      editMode: false
    })
  }
  editItem () {
    const { items, currentItem, text } = this.state

    const newItems = items.filter(item => item.id !== currentItem.id)
    currentItem.text = text
    this.setState({
      items: [...newItems, currentItem],
      text: '',
      currentItem: null,
      editMode: false
    })
  }
  handleItemClick (id) {
    const currentItem = _.find(this.state.items, { id })
    this.setState({
      text: currentItem.text,
      currentItem,
      editMode: true
    })
  }
  render () {
    return (
      <div>
        <h1>Brain Dump</h1>
        <input
          type='text'
          onKeyPress={e => this.handleChange(e)}
          onChange={e => this.setState({ text: e.target.value })}
          autoFocus
          placeholder="What's on your mind?"
          value={this.state.text}
          ref={input => {
            input && input.focus()
          }}
        />
        <div className='dumpArea'>
          {this.state.items.map(item => (
            <BrainDump
              key={item.id}
              item={item}
              handleItemClick={id => this.handleItemClick(id)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
