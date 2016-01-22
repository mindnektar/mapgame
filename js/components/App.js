import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';
import levels from '../levels';
import Map from './Map';
import Sidebar from './Sidebar';

let App = React.createClass({
    render() {
        const {dispatch, current, map} = this.props;

        const step = levels[current.level].steps[current.step];

        return (
            <div>
                <Map
                    markers={map.markers}
                    step={current.step}
                    hasLatLngAnswer={step.answer && step.answer.type === 'latLng'}
                    answerValid={this.isAnswerValid(step.answer, {current, map})}
                    setMarker={(step, lat, lng) => dispatch(actions.setMarker(step, lat, lng))}
                />
                <Sidebar
                    levels={levels}
                    current={current}
                    answerValid={this.isAnswerValid(step.answer, {current, map})}
                    nextStep={() => dispatch(actions.nextStep())}
                    changeAnswer={answer => dispatch(actions.changeAnswer(answer))}
                />
            </div>
        );
    },

    isAnswerValid(answer, data) {
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
});

const select = state => {
    return {
        current: state.current,
        map: state.map
    }
};

export default connect(select)(App);
