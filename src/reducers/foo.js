import { handleActions } from 'redux-actions';
 
import actions from 'src/actions/foo'; // we'll use these actions for now, and create our own one later
 
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