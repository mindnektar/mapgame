import current from './reducers/current';
import map from './reducers/map';
import tab from './reducers/tab';
import {combineReducers} from 'redux';

export default combineReducers({current, map, tab});
