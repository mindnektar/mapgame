import React, {Component} from 'react';

export default class NextStep extends Component {
    render() {
        return (
            <div id="next-step">
                <button
                    onClick={() => this.props.nextStep()}
                    disabled={!this.props.answerValid ? 'disabled' : ''}
                >
                    Nächster Schritt
                </button>
            </div>
        );
    }
}
