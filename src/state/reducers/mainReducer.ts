import { combineReducers } from 'redux';
import { packReducer } from './packReducer';

export const mainReducer = combineReducers({ repos: packReducer });