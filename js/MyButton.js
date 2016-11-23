import React,{ Component } from 'react'

export default class MyButton extends Component {
  render() {
    let { items } = this.props
    
    return(
      <div>
        <ul>
          {
            items.map((item, i) => {
              return <li key={i}>{item}</li>
            })
          }
        </ul>
        <button onClick={this.props.onClick}>添加</button>
      </div>
    )
  }
}