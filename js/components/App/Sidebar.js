import React, {Component} from 'react';
import Progress from './Sidebar/Progress';
import Steps from './Sidebar/Steps';
import NextStep from './Sidebar/NextStep';

export default class Sidebar extends Component {
    render() {
        const steps = this.props.levels[this.props.current.level].steps;

        return (
            <div id="sidebar">
                <Progress
                    stepCount={steps.length}
                    currentStep={this.props.current.step}
                    nextStep={this.props.nextStep}
                />
                <Steps
                    steps={steps}
                    currentStep={this.props.current.step}
                    answerValid={this.props.answerValid}
                    nextStep={this.props.nextStep}
                    changeAnswer={this.props.changeAnswer}
                />
                {
                    this.props.current.step < steps.length ?
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
