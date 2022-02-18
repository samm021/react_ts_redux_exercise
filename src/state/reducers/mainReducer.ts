import { combineReducers } from 'redux';
import { packReducer } from './packReducer';

export const mainReducer = combineReducers({ repositories: packReducer });

export type RootState = ReturnType<typeof mainReducer>;