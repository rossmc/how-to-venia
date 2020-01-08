import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import { updateTest } from 'src/actions/foo';

const updateRedux = props => {
  const { test, updateTest } = props;

  return (
    <input type="text" value={test} onChange={updateTest} style={{ textAlign: 'center' }} />
  );
}

updateRedux.propTypes = {
  test: PropTypes.string,
  updateTest: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  updateTest: (e) => dispatch(updateTest(e.target.value))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(updateRedux);
