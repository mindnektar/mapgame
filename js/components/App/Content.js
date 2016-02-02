import React, {Component} from 'react';
import Inventory from './Content/Inventory';
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
                    currentStep={this.props.currentStep}
                    hasLatLngAnswer={this.props.hasLatLngAnswer}
                    answerValid={this.props.answerValid}
                    setMarker={this.props.setMarker}
                />

                <MapControls
                    visible={this.props.currentTab === 'map'}
                    hasLatLngAnswer={this.props.hasLatLngAnswer}
                />

                <Inventory
                    items={this.props.inventoryItems}
                    selected={this.props.inventorySelected}
                    visible={this.props.currentTab === 'inventory'}
                    select={this.props.inventorySelect}
                />

                <Notes
                    visible={this.props.currentTab === 'notes'}
                />
            </div>
        );
    }
}
