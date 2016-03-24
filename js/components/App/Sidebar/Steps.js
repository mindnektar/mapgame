import React, {Component} from 'react';
import Step from './Steps/Step';
import Win from './Steps/Win';

export default class Steps extends Component {
    render() {
        return (
            <ul
                id="steps"
                ref={ul => this.ul = ul}
            >
                {this.props.steps.map((step, key) =>
                    <Step
                        key={key}
                        stepNum={key + 1}
                        text={step.text}
                        current={key === this.props.currentStep}
                        visible={key <= this.props.currentStep}
                        image={step.image}
                        hasStringAnswer={step.answer && step.answer.type === 'string'}
                        answerValid={this.props.answerValid || key < this.props.currentStep}
                        nextStep={this.props.nextStep}
                        changeAnswer={this.props.changeAnswer}
                    />
                )}

                <Win
                    visible={this.props.currentStep >= this.props.steps.length}
                />
            </ul>
        );
    }

    componentDidUpdate() {
        this.ul.scrollTop = this.ul.scrollHeight;
    }
}
