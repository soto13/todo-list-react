import { combineReducers } from 'redux';
import pathReducer from './path-reducer';
import todos from './todos/todos';
// import findUserReducer from './user/find-user';
import userReducer from './user/user';
import visibilityFilter from './visibility-filter/visibility-filter';

const todoApp = combineReducers({ path: pathReducer, todos, visibilityFilter, user: userReducer });

export default todoApp;

