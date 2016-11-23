import React, { Component } from 'react'
import MyButtonController from './components/MyButtonController'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div>
        <h1>Index</h1>
        <MyButtonController />
      </div>
    )
  }
}

