import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [], 
      error: ''
    }
  }

  componentDidMount() {
    getAllReservations()
    .then(reservations => this.setState({ reservations }))
    .catch(error => this.setState({error: error.message}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
