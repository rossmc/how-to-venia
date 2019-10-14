import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes, func, string } from 'prop-types';
import { updateTest } from 'src/actions/foo';

class updateRedux extends Component {
  static propTypes = {
    test: PropTypes.string,
    updateTest: PropTypes.func.isRequired
  };

  render() {
    const { test, updateTest } = this.props;

    return (
      <input type="text" value={test} onChange={updateTest} style={{ textAlign: 'center' }} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTest: (e) => dispatch(updateTest(e.target.value))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(updateRedux);