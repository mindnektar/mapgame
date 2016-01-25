const initialState = {
    items: [
        {
            id: 'map',
            label: 'Map'
        },
        {
            id: 'inventory',
            label: 'Inventory'
        },
        {
            id: 'notes',
            label: 'Notes'
        }
    ],
    current: 'map'
};

export default (state = initialState, action = '') => {
    switch (action.type) {
        case 'CHANGE_TAB':
            return Object.assign({}, state, {current: action.tab});

        default:
            return state;
    }
};
