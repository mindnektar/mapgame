const initialState = {
    answer: '',
    level: 0,
    step: 0
};

export default (state = initialState, action = '') => {
    switch (action.type) {
        case 'NEXT_STEP':
            return Object.assign({}, state, {step: state.step + 1, answer: ''});

        case 'CHANGE_ANSWER':
            return Object.assign({}, state, {answer: action.answer});

        default:
            return state;
    }
};