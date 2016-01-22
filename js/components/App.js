import React from 'react';
import {connect} from 'react-redux'
import levels from '../levels';
import Map from './Map';
import Sidebar from './Sidebar';

let App = React.createClass({
    render() {
        const {current, map} = this.props;

        const step = levels[current.level].steps[current.step];

        return (
            <div>
                <Map
                    markers={map.markers}
                    step={current.step}
                    hasLatLngAnswer={step.answer && step.answer.type === 'latLng'}
                    answerValid={this.isAnswerValid(step.answer, current, map)}
                />
                <Sidebar
                    levels={levels}
                    current={current}
                    answerValid={this.isAnswerValid(step.answer, current, map)}
                />
            </div>
        );
    },

    isAnswerValid(answer, current, map) {
        if (!answer) {
            return true;
        }

        switch (answer.type) {
            case 'string':
                return current.answer.toLowerCase() === answer.value.toLowerCase();

            case 'latLng':
                const marker = map.markers[current.step];
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
