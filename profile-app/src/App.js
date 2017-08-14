import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from "./person/person";

class App extends Component {
  constructor(){
    super();

    this.state = {
      people: [{
        name: "jimmy",
        age: 33
      },
      {
        name: 'bob',
        age: 24
      }]

    }
  }

  handleSubmit(event){
    event.preventDefault();
    // console.log("heard")
    // console.log("the age input", this.refs.age.value);
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    this.setState({
      people: this.state.people.concat({name,age})
    })
  }

  render() {
      let peopleList = this.state.people.map(person => <Person key={person.name} details={person} />)
    return (
      <div className="Person">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p><input type="text" ref="name"/></p>
            <p><input type="number" ref="age"/></p>
            <button type="submit">Click me</button>
          </form>
        <ul>
        {peopleList}
        </ul>
      </div>
    );
  }
}

export default App;
