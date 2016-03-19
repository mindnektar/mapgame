const initialState = {
    items: [],
    current: 0,
    started: false
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

        case 'START':
            return Object.assign({}, state, {started: true});

        default:
            return state;
    }
};
