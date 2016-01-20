export default React.createClass({
    render() {
        return (
            <span
                onClick={() => {
                    window.store.dispatch({
                        type: 'NEXT_STEP'
                    });
                }}
            >
                Skip
            </span>
        );
    }
});
