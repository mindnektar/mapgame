const initialState = {
    selected: null,
    items: [
        {
            image: 'paper.png',
            owned: true
        }
    ]
};

export default (state = initialState, action = '') => {
    switch (action.type) {
        case 'INVENTORY_SELECT':
            return Object.assign({}, state, {selected: action.index});

        default:
            return state;
    }
};
