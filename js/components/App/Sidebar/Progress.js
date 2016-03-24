import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div
                id="progress"
                //onClick={() => this.props.nextStep()}
            >
                <div id="progress-bar">
                    <div style={{width: this.getWidth()}}></div>
                </div>

                <span id="progress-text">
                {Math.min(this.props.currentStep + 1, this.props.stepCount) + '/' + this.props.stepCount}
                </span>
            </div>
        );
    }

    getWidth() {
        return Math.min(
            ((this.props.currentStep + 1) / this.props.stepCount * 100),
            100
        ) + '%';
    }
}
