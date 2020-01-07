import { createActions } from 'redux-actions';

const prefix = 'FOO';
const actionTypes = [
  'UPDATE_TEST'
];

export default createActions(...actionTypes, { prefix });