import React, { Component } from 'react';
import { PropTypes, string } from 'prop-types';

class Greeting extends Component {
  static propTypes = {
    name: PropTypes.string
  };
  render() {
    return (
      <strong>Hello, {this.props.name}!</strong>
    );
  }
}

export default Greeting;