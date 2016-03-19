import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import Content from './App/Content';
import TopBar from './App/TopBar';
import Sidebar from './App/Sidebar';
import Intro from './App/Intro';

class App extends Component {
    render() {
        const {answer, inventory, map, steps, tab} = this.props;
        const stepItem = steps.items[steps.current];

        return (
            <div className={steps.started ? 'started' : ''}>
                <Intro
                    start={this.props.start}
                />

                <Content
                    steps={steps.items}
                    currentTab={tab.current}
                    currentStep={steps.current}
                    markers={map.markers}
                    polylines={map.polylines}
                    inventoryItems={inventory.items}
                    inventorySelected={inventory.selected}
                    hasLatLngAnswer={stepItem && stepItem.answer && stepItem.answer.type === 'latLng'}
                    answerValid={answer.valid}
                    setMarker={this.props.setMarker}
                    inventorySelect={this.props.inventorySelect}
                />

                <Sidebar
                    currentStep={steps.current}
                    steps={steps.items}
                    answerValid={answer.valid}
                    nextStep={this.props.nextStep}
                    changeAnswer={this.props.changeAnswer}
                />

                <TopBar
                    tabs={tab.items}
                    currentTab={tab.current}
                    changeTab={this.props.changeTab}
                />
            </div>
        );
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

const mapDispatchToProps = dispatch => bindActionCreators({
    setMarker: actions.setMarker,
    inventorySelect: actions.inventorySelect,
    nextStep: actions.nextStep,
    changeAnswer: actions.changeAnswer,
    changeTab: actions.changeTab,
    start: actions.start
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
