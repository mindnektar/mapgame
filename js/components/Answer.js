import React from 'react';
import NextStep from './NextStep';

export default React.createClass({
    render() {
        return (
            <div className={'answer' + (this.props.answerValid ? ' valid' : '')}>
                <input
                    ref={input => this.input = input}
                    onChange={event => {
                        window.store.dispatch({
                            type: 'CHANGE_ANSWER',
                            answer: event.target.value
                        });
                    }}
                    onKeyPress={event => {
                        if (event.which === 13 && this.props.answerValid) {
                            window.store.dispatch({
                                type: 'NEXT_STEP'
                            });
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
