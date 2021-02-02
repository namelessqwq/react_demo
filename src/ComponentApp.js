import React, { Component } from 'react'
import ComponentInput from './ComponentInput'
import ComponentList from './ComponentList'

class ComponentApp extends Component {
  render() {
    return (
      <div className="wrapper">
        <ComponentInput />
        <ComponentList />
      </div>
    )
  }
}

export default ComponentApp