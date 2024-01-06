import React, { Component } from 'react'

export default class BasicInfo extends Component {
//define each prop value wanted to display on the front end
  render() {
    return (
      <div>
        <h1>{this.props.person.name}</h1>
        <h2>{this.props.person.number}</h2>
        <h2>{this.props.person.birthDate}</h2>
      </div>
    )
  }
}
