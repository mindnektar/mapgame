const initialState = {
    markers: []
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case 'SET_MARKER':
            var markers = state.markers.slice();

            markers[payload.step] = {
                lat: payload.lat,
                lng: payload.lng
            };

            return Object.assign({}, state, {markers});

        default:
            return state;
    }
};
