import './App.css';

import React, { Component } from 'react'
import BasicInfo from './components/BasicInfo';

export default class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    //create an array of objects with contacts
    contact: [
      {
      name: 'Monica',
      number: '954-918-3642',
      birthDate: '04-04-1996'
    }, 
    {
      name: 'Mayte',
      number: '754-000-0000',
      birthDate: '12-15-1999'
    },
    {
      name: 'Jacob',
      number: '919-111-1111',
      birthDate: '09-20-1997'
    }
  ]
  }
}

  render() {
    return (
      //use map method to iterate through array and return each contact (p) as a prop (person)
      <div className='contact-info'>
        {this.state.contact.map((p) => (
          <BasicInfo person={p}/>
        )
        )}
      </div>
    )
  }
}



