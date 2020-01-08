import React from 'react';
import { PropTypes } from 'prop-types';

const Greeting = props => {
  const { name } = props;

  return (
    <strong>Hello, {name}!</strong>
  );
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
