export default React.createClass({
    render() {
        return (
            <button
                id="next-step"
                onClick={() => {
                    window.store.dispatch({
                        type: 'NEXT_STEP'
                    });
                }}
                disabled={!this.props.answerValid ? 'disabled' : ''}
            >
                Next step
            </button>
        );
    }
});
