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
            const icon = this.props.answerValid || key < this.props.step ? 'img/marker_correct.png' : 'img/marker.png';

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
            console.log(event.latLng.lat(), event.latLng.lng());

            if (!this.props.hasLatLngAnswer) {
                return;
            }

            this.props.setMarker(
                this.props.step,
                event.latLng.lat(),
                event.latLng.lng()
            );
        });
    }
}
