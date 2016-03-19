const initialState = {
    markers: [],
    polylines: []
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case 'SET_MARKER':
            const markers = state.markers.slice();

            markers[payload.step] = {
                lat: payload.lat,
                lng: payload.lng
            };

            return Object.assign({}, state, {markers});

        case 'SET_POLYLINE':
            return Object.assign({}, state, {polylines: [
                ...state.polylines,
                payload.polyline
            ]});

        default:
            return state;
    }
};
