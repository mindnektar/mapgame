import React from 'react';
import Progress from './Progress';
import Steps from './Steps';
import NextStep from './NextStep';

export default React.createClass({
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
                <NextStep
                    answerValid={this.props.answerValid}
                    nextStep={this.props.nextStep}
                />
            </div>
        );
    }
});
