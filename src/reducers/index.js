import { combineReducers } from 'redux';
import pathReducer from './path-reducer';

const todoApp = combineReducers({ pathReducer });

export default todoApp;
