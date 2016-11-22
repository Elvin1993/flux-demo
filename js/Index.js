import React, { Component } from 'react'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['hello world1']
    }
  }
  addItem() {
    let { list=[] } = this.state

    list.push('hello world' + (list.length + 1))
    this.setState({
      list
    })
  }

  render() {
    let { list } = this.state

    return(
      <div>
        <ul>
          {
            list.map((value, key) => {
              return <li key={key}>{value}</li>
            })
          }
        </ul>
        <button onClick={this.addItem.bind(this)}>添加</button>
      </div>
    )
  }
}

