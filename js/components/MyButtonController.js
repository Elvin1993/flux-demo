import React, { Component } from 'react'
import ButtonActions from './actions/ButtonActions'
import MyButton from '../MyButton'
import ListStore from './stores/ListStore'

export default class MyButtonController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ListStore.getAll()
    }
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange.bind(this))
  }

  _onChange() {
    this.setState({
      items: ListStore.getAll()
    })
  }

  createNewItem() {
    ButtonActions.addNewItem('new item')
    console.log(ListStore.getAll())

  }

  render() {
    let { items } = this.state
    return <MyButton items={items} onClick={this.createNewItem} />
  }
}