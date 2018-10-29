import { combineReducers } from 'redux';
// import findUserReducer from './user/find-user';
import userReducer from './user/user';

const todoApp = combineReducers({ user: userReducer });

export default todoApp;

