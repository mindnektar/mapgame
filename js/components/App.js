import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';
import levels from '../levels';
import Map from './App/Map';
import Sidebar from './App/Sidebar';

class App extends Component {
    render() {
        const {dispatch, current, map} = this.props;

        const step = levels[current.level].steps[current.step];

        return (
            <div>
                <Map
                    markers={map.markers}
                    step={current.step}
                    hasLatLngAnswer={step && step.answer && step.answer.type === 'latLng'}
                    answerValid={step && App.isAnswerValid(step.answer, {current, map})}
                    setMarker={(step, lat, lng) => dispatch(actions.setMarker(step, lat, lng))}
                />
                <Sidebar
                    levels={levels}
                    current={current}
                    answerValid={step && App.isAnswerValid(step.answer, {current, map})}
                    nextStep={() => dispatch(actions.nextStep())}
                    changeAnswer={answer => dispatch(actions.changeAnswer(answer))}
                />
            </div>
        );
    }

    static isAnswerValid(answer, data) {
        if (!answer) {
            return true;
        }

        switch (answer.type) {
            case 'string':
                return data.current.answer.toLowerCase() === answer.value.toLowerCase();

            case 'latLng':
                const marker = data.map.markers[data.current.step];
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
    }
}

const select = state => {
    return {
        current: state.current,
        map: state.map
    };
};

export default connect(select)(App);
