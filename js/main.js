import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './components/App.js';

require('../sass/main.sass');

window.store = createStore(reducers);

const render = () => {
    ReactDOM.render(
        (
            <Provider store={window.store}>
                <App />
            </Provider>
        ),
        document.getElementById('app')
    );
};

window.store.subscribe(render);
render();
