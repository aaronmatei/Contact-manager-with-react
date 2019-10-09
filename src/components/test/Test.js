import React, { Component } from 'react';
class Test extends Component {
  state = {};
  componentDidMount() {
    console.log('mount');
  }
  render() {
    return (
      <div>
        <h1>This is test Component</h1>
      </div>
    );
  }
}

export default Test;
