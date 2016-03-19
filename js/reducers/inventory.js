const initialState = {
    selected: null,
    items: [
        {
            image: 'paper.png',
            text: 'Kfbkalocbo Dbebdb'
        },
        {
            image: 'caesar.png'
        },
        {
            image: 'treasure.png',
            triggersNextStep: true
        }
    ]
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    let items;

    switch (type) {
        case 'ADD_ITEMS':
            items = state.items.slice(0);

            payload.items.forEach(item => items[item].owned = true);

            return Object.assign({}, state, {items});

        case 'INVENTORY_SELECT':
            items = state.items;

            if (payload.index) {
                items = [
                    ...state.items.slice(0, payload.index),
                    Object.assign({}, state.items[payload.index], {triggersNextStep: false}),
                    ...state.items.slice(payload.index + 1)
                ];
            }

            return Object.assign({}, state, {
                selected: payload.index,
                items
            });

        default:
            return state;
    }
};
