import React, {Component} from 'react';

export default class MapControls extends Component {
    render() {
        return (
            <div
                id="map-controls"
                className={this.props.visible ? 'visible' : ''}
            >
                <button className="line"></button>

                <div className="separator"></div>

                <button
                    className="marker"
                    disabled={!this.props.hasLatLngAnswer}
                >
                </button>
            </div>
        );
    }
}
