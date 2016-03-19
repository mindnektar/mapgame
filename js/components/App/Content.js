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
                    steps={this.props.steps}
                    visible={this.props.currentTab === 'map'}
                    markers={this.props.markers}
                    polylines={this.props.polylines}
                    currentStep={this.props.currentStep}
                    hasLatLngAnswer={this.props.hasLatLngAnswer}
                    answerValid={this.props.answerValid}
                    setMarker={this.props.setMarker}
                />

                <MapControls
                    visible={false}
                    hasLatLngAnswer={this.props.hasLatLngAnswer}
                />

                <Inventory
                    items={this.props.inventoryItems}
                    selected={this.props.inventorySelected}
                    visible={this.props.currentTab === 'inventory'}
                    select={this.props.inventorySelect}
                />

                <Notes
                    visible={false}
                />
            </div>
        );
    }
}
