import React, { Component } from 'react';
import { string } from 'prop-types';
 
class Greeting extends Component {
  static propTypes = {
    name: string
  };

  render() {
      return (
          <strong>Hello, {this.props.name}!</strong>
      );
  }
}
 
export default Greeting;