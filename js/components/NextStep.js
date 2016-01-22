import React from 'react';

export default React.createClass({
    render() {
        return (
            <div id="next-step">
                <button
                    onClick={() => {
                        window.store.dispatch({
                            type: 'NEXT_STEP'
                        });
                    }}
                    disabled={!this.props.answerValid ? 'disabled' : ''}
                >
                    Next step
                </button>
            </div>
        );
    }
});
