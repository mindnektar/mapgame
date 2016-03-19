const initialState = {
    items: [
        {
            id: 'map',
            label: 'Karte'
        },
        {
            id: 'inventory',
            label: 'Inventar'
        }
        /*{
            id: 'notes',
            label: 'Notes'
        }*/
    ],
    current: 'map'
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case 'CHANGE_TAB':
            return Object.assign({}, state, {current: payload.tab});

        default:
            return state;
    }
};
