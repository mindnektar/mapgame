import React from 'react';

export default React.createClass({
    render() {
        return (
            <img src={'img/' + this.props.source + '.png'} />
        );
    }
});
