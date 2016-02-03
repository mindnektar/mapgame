const initialState = {
    selected: null,
    items: [
        {
            image: 'paper.png',
            owned: true
        }
    ]
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case 'INVENTORY_SELECT':
            return Object.assign({}, state, {selected: payload.index});

        default:
            return state;
    }
};
