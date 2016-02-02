import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';
import Content from './App/Content';
import TopBar from './App/TopBar';
import Sidebar from './App/Sidebar';

class App extends Component {
    render() {
        const {dispatch, answer, inventory, map, steps, tab} = this.props;
        const stepItem = steps.items[steps.current];

        return (
            <div>
                <Content
                    currentTab={tab.current}
                    currentStep={steps.current}
                    markers={map.markers}
                    inventoryItems={inventory.items}
                    inventorySelected={inventory.selected}
                    hasLatLngAnswer={stepItem && stepItem.answer && stepItem.answer.type === 'latLng'}
                    answerValid={stepItem && App.isAnswerValid(stepItem.answer, {answer, step: steps.current, map})}
                    setMarker={(step, lat, lng) => dispatch(actions.setMarker(step, lat, lng))}
                    inventorySelect={index => dispatch(actions.inventorySelect(index))}
                />

                <Sidebar
                    currentStep={steps.current}
                    steps={steps.items}
                    answerValid={stepItem && App.isAnswerValid(stepItem.answer, {answer, step: steps.current, map})}
                    nextStep={() => dispatch(actions.nextStep())}
                    changeAnswer={answer => dispatch(actions.changeAnswer(answer))}
                />

                <TopBar
                    tabs={tab.items}
                    currentTab={tab.current}
                    changeTab={tab => dispatch(actions.changeTab(tab))}
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
                return data.answer.toLowerCase() === answer.value.toLowerCase();

            case 'latLng':
                const marker = data.map.markers[data.step];

                if (!marker) {
                    return false;
                }

                return google.maps.geometry.poly.containsLocation(
                    new google.maps.LatLng(marker.lat, marker.lng),
                    new google.maps.Polygon({paths: answer.value})
                );
        }

        return false;
    }
}

const mapStateToProps = state => {
    return {
        answer: state.answer,
        inventory: state.inventory,
        map: state.map,
        steps: state.steps,
        tab: state.tab
    };
};

export default connect(mapStateToProps)(App);
