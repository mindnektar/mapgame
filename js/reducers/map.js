const initialState = {
    markers: []
};

export default (state = initialState, action = '') => {
    switch (action.type) {
        case 'SET_MARKER':
            var markers = state.markers.slice();

            markers[action.step] = {
                lat: action.lat,
                lng: action.lng
            };

            return Object.assign({}, state, {markers});

        default:
            return state;
    }
};
