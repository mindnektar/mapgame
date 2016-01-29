import current from './reducers/current';
import inventory from './reducers/inventory';
import map from './reducers/map';
import tab from './reducers/tab';
import {combineReducers} from 'redux';

export default combineReducers({current, inventory, map, tab});
