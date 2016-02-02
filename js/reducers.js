import answer from './reducers/answer';
import inventory from './reducers/inventory';
import map from './reducers/map';
import step from './reducers/step';
import tab from './reducers/tab';
import {combineReducers} from 'redux';

export default combineReducers({answer, inventory, map, step, tab});
