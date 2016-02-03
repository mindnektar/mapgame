const initialState = '';

export default (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case 'CHANGE_ANSWER':
            return payload.answer;

        case 'NEXT_STEP':
            return '';

        default:
            return state;
    }
};
