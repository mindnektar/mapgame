import React from 'react';

export default React.createClass({
    render() {
        return (
            <div
                id="progress"
                onClick={() => {
                    window.store.dispatch({
                        type: 'NEXT_STEP'
                    });
                }}
            >
                <div id="progress-bar">
                    <div style={{width: this.getWidth()}}></div>
                </div>

                <span id="progress-text">{(this.props.currentStep + 1) + '/' + this.props.stepCount}</span>
            </div>
        );
    },

    getWidth() {
        return ((this.props.currentStep + 1) / this.props.stepCount * 100) + '%';
    }
});