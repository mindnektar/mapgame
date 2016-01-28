import React, {Component} from 'react';

export default class MapControls extends Component {
    render() {
        return (
            <div
                id="map-controls"
                className={this.props.visible ? 'visible' : ''}
            >
            </div>
        );
    }
}
