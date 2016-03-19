import React, {Component} from 'react';
import Progress from './Sidebar/Progress';
import Steps from './Sidebar/Steps';
import NextStep from './Sidebar/NextStep';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <Progress
                    currentStep={this.props.currentStep}
                    stepCount={this.props.steps.length}
                    nextStep={this.props.nextStep}
                />

                <Steps
                    currentStep={this.props.currentStep}
                    steps={this.props.steps}
                    answerValid={this.props.answerValid}
                    nextStep={this.props.nextStep}
                    changeAnswer={this.props.changeAnswer}
                />

                {
                    this.props.currentStep < this.props.steps.length ?
                        <NextStep
                            answerValid={this.props.answerValid}
                            nextStep={this.props.nextStep}
                        /> :
                        ''
                }
            </div>
        );
    }
}
