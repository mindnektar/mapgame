import React, {Component} from 'react';
import Map from './Content/Map';
import MapControls from './Content/MapControls';
import Notes from './Content/Notes';

export default class Content extends Component {
    render() {
        return (
            <div id="content">
                <Map
                    visible={this.props.currentTab === 'map'}
                    markers={this.props.markers}
                    step={this.props.step}
                    hasLatLngAnswer={this.props.hasLatLngAnswer}
                    answerValid={this.props.answerValid}
                    setMarker={this.props.setMarker}
                />
                <MapControls
                    visible={this.props.currentTab === 'map'}
                    hasLatLngAnswer={this.props.hasLatLngAnswer}
                />
                <Notes
                    visible={this.props.currentTab === 'notes'}
                />
            </div>
        );
    }
}
