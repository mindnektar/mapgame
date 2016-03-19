const initialState = {
    value: '',
    valid: false
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case 'CHANGE_ANSWER':
            return Object.assign({}, state, {value: payload.answer});

        case 'SET_VALIDITY':
            return Object.assign({}, state, {valid: payload.valid});

        default:
            return state;
    }
};
