import './App.css';

import React, { Component } from 'react'
import BasicInfo from './components/BasicInfo';

export default class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    person: {
      name: 'Monica',
      number: '9549183642',
      birthDate: '04041996'
    }
  }
}

  render() {
    return (
      <div>
        <BasicInfo person={this.state.person}/>
      </div>
    )
  }
}



