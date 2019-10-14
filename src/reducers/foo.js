import { handleActions } from 'redux-actions';

import actions from '../actions/foo';

export const name = 'foo';

const initialState = {
  test: 'lorem ipsum'
};

const reducerMap = {
  [actions.updateTest]: (state, { payload }) => {
    return {
      ...state,
      test: payload
    };
  }
};

export default handleActions(reducerMap, initialState);