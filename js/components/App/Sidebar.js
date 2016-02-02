import React, {Component} from 'react';
import Progress from './Sidebar/Progress';
import Steps from './Sidebar/Steps';
import NextStep from './Sidebar/NextStep';

export default class Sidebar extends Component {
    render() {
        const steps = this.props.levels[this.props.level].steps;

        return (
            <div id="sidebar">
                <Progress
                    stepCount={steps.length}
                    currentStep={this.props.step}
                    nextStep={this.props.nextStep}
                />
                <Steps
                    steps={steps}
                    currentStep={this.props.step}
                    answerValid={this.props.answerValid}
                    nextStep={this.props.nextStep}
                    changeAnswer={this.props.changeAnswer}
                />
                {
                    this.props.step < steps.length ?
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
