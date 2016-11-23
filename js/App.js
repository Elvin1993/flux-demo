import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {

  render() {
    return (
      <div>
        <ul>
          <li style={{float: 'left', width: '200px'}}><Link to="/index">Index</Link></li>
          <li style={{float: 'left', width: '200px'}}><Link to="/home">Home</Link></li>
          <div style={{clear: 'both'}}> </div>
        </ul>
        {this.props.children}
      </div>
      )
    
  }
}

