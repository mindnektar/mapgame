import React, {Component} from 'react';

export default class Map extends Component {
    render() {
        if (this.markers) {
            this.markers.forEach(marker => {
                marker.setMap(null);
            });
        }

        this.markers = [];

        this.props.markers.forEach((marker, key) => {
            let icon;

            if (this.props.answerValid) {
                if (this.props.steps[key].important) {
                    icon = 'img/marker_important.png';
                } else {
                    icon = 'img/marker_correct.png';
                }
            } else {
                if (key < this.props.currentStep) {
                    if (this.props.steps[key].important) {
                        icon = 'img/marker_important.png';
                    } else {
                        icon = 'img/marker_correct.png';
                    }
                } else {
                    icon = 'img/marker.png';
                }
            }

            this.markers.push(
                new google.maps.Marker({
                    map: this.map,
                    icon: icon,
                    position: new google.maps.LatLng(
                        marker.lat,
                        marker.lng
                    )
                })
            );
        });

        if (this.polylines) {
            this.polylines.forEach(polyline => {
                polyline.setMap(null);
            });
        }

        this.polylines = [];

        this.props.polylines.forEach(polyline => {
            this.polylines.push(
                new google.maps.Polyline({
                    map: this.map,
                    clickable: false,
                    path: polyline,
                    strokeColor: '#f00',
                    strokeWeight: 3
                })
            );
        });

        return (
            <div
                id="map"
                className={this.props.visible ? 'visible' : ''}
            >
            </div>
        );
    }

    componentDidMount() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 0, lng: 0},
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            zoom: 3,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            }
        });

        this.map.addListener('click', event => {
            console.log(`{lat: ${event.latLng.lat()}, lng: ${event.latLng.lng()}}`);

            if (!this.props.hasLatLngAnswer) {
                return;
            }

            this.props.setMarker(
                this.props.currentStep,
                event.latLng.lat(),
                event.latLng.lng()
            );
        });
    }
}
