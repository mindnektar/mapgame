const initialState = {
    items: [],
    current: 0
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case 'NEXT_STEP':
            return Object.assign({}, state, {current: state.current + 1});

        case 'SET_STEPS':
            return {
                items: payload.steps,
                current: 0
            };

        default:
            return state;
    }
};
