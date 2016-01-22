import React from 'react';

export default React.createClass({
    render() {
        return (
            <div id="next-step">
                <button
                    onClick={() => this.props.nextStep()}
                    disabled={!this.props.answerValid ? 'disabled' : ''}
                >
                    Next step
                </button>
            </div>
        );
    }
});
