import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import reducers from './reducers';
import levels from './levels';

window.store = createStore(reducers);

const isAnswerValid = (answer, state) => {
    if (!answer) {
        return true;
    }

    switch (answer.type) {
        case 'string':
            return state.current.answer.toLowerCase() === answer.value.toLowerCase();

        case 'latLng':
            const marker = state.map.markers[state.current.step];
            const tolerance = answer.value.tolerance || .0002;

            if (!marker) {
                return false;
            }

            return (
                Math.abs(marker.lat - answer.value.lat) <= tolerance &&
                Math.abs(marker.lng - answer.value.lng) <= tolerance
            );
    }

    return false;
};

const render = () => {
    let state = window.store.getState();
    const step = levels[state.current.level].steps[state.current.step];

    ReactDOM.render(
        (
            <div>
                <Map
                    markers={state.map.markers}
                    step={state.current.step}
                    hasLatLngAnswer={step.answer && step.answer.type === 'latLng'}
                    answerValid={isAnswerValid(step.answer, state)}
                />
                <Sidebar
                    levels={levels}
                    current={state.current}
                    answerValid={isAnswerValid(step.answer, state)}
                />
            </div>
        ),
        document.getElementById('app')
    );
};

window.store.subscribe(render);
render();
