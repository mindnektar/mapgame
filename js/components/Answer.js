import React from 'react';
import NextStep from './NextStep';

export default React.createClass({
    render() {
        return (
            <div className={'answer' + (this.props.answerValid ? ' valid' : '')}>
                <input
                    ref={input => this.input = input}
                    onChange={event => this.props.changeAnswer(event.target.value)}
                    onKeyPress={event => {
                        if (event.which === 13 && this.props.answerValid) {
                            this.props.nextStep();
                        }
                    }}
                    disabled={this.props.disabled ? 'disabled' : ''}
                />
            </div>
        );
    },

    componentDidUpdate() {
        if (this.props.visible) {
            this.input.focus();
        }
    }
});
