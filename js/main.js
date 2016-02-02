import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as actions from './actions';
import reducers from './reducers';
import levels from './levels';
import App from './components/App.js';

require('../sass/main.sass');

let store = createStore(reducers);

store.dispatch(actions.setSteps(levels[0].steps));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
