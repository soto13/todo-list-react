import { combineReducers } from 'redux';
import pathReducer from './path-reducer';
import todos from './todos/todos';
import visibilityFilter from './visibility-filter/visibility-filter';

const todoApp = combineReducers({ pathReducer, todos, visibilityFilter });

export default todoApp;
export { pathReducer, todos, visibilityFilter };

