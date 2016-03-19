import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import * as actions from './actions';
import reducers from './reducers';
import levels from './levels';
import App from './components/App.js';

require('../sass/main.sass');

const middleware = [
    /*createLogger({
        collapsed: true,
        level: 'info',
        predicate: (getState, action) => typeof action.type !== 'undefined'
    }),*/
    thunk
];

const store = applyMiddleware(...middleware)(createStore)(reducers);

store.dispatch(actions.setSteps(levels[1].steps));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
