import React, {Component} from 'react';

export default class MapControls extends Component {
    render() {
        return (
            <div
                id="map-controls"
                className={this.props.visible ? 'visible' : ''}
            >
                <button className="line"></button>
                <button className="marker"></button>
            </div>
        );
    }
}
