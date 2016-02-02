const initialState = {
    items: [],
    current: 0
};

export default (state = initialState, action = '') => {
    switch (action.type) {
        case 'NEXT_STEP':
            return Object.assign({}, state, {current: state.current + 1});

        case 'SET_STEPS':
            return {
                items: action.steps,
                current: 0
            };

        default:
            return state;
    }
};
