import React, { Component } from 'react';

class Foo extends Component {


  componentDidMount() {
    document.title = 'Foo Test Page';
  }
  render() {
    return (
      <h1>Hello Foo Component</h1>
    );
  }
}

export default Foo;