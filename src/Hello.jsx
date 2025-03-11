import React, { Component } from 'react'

class Hello extends Component {
  render() {
    
    return (
      <>
        <h1>Hello World!</h1>
        <h2>Welcome to my first component</h2>
        <h3>{this.props.greeting}</h3>
      </>
    )
  }
}

export default Hello;
