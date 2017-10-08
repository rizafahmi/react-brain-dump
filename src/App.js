import React, { Component } from 'react'
import nanoid from 'nanoid'

import BrainDump from './components/BrainDump'

class App extends Component {
  constructor () {
    super()

    this.state = {
      text: '',
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
    if (e.key === 'Enter') {
      this.newItem()
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
      text: ''
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
        />
        <div className='dumpArea'>
          {this.state.items.map(item => (
            <BrainDump key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
