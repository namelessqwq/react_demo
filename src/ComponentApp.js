import React, { Component } from 'react'
import ComponentInput from './ComponentInput'
import ComponentList from './ComponentList'


class ComponentApp extends Component {
  handleSubmit(e) {
    console.log(123)
  }

  render() {
    return (
      <div className="wrapper">
        <ComponentInput onSubmit={this.handleSubmit.bind(this)}/>
        <ComponentList />
      </div>
    )
  }
}

export default ComponentApp