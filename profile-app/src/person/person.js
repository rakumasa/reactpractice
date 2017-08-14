import React, { Component } from 'react';

class Person extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="Person">
      <p>Name: {this.props.details.name}</p>
      <p>Age: {this.props.details.age}</p>
      </div>
    );
  }
}

export default Person;
