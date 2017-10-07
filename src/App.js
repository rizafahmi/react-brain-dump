import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      items: [
        {
          text: 'Brain dump'
        }
      ]
    }
  }
  newItem () {
    this.setState({
      items: [...this.state.items, { text: 'New item' }]
    })
  }
  render () {
    return (
      <div>
        <h1>Brain Dump</h1>
        <div className='dumpArea'>
          {this.state.items.map(item => <div>{item.text}</div>)}
        </div>
        <button onClick={() => this.newItem()}>+</button>
      </div>
    )
  }
}

export default App
