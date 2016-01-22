import current from './reducers/current';
import map from './reducers/map';
import {combineReducers} from 'redux';

export default combineReducers({current, map});
