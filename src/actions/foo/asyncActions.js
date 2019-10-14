import actions from './actions';

export const updateTest = value => async dispatch =>
  dispatch(actions.updateTest(value));