const initialState = '';

export default (state = initialState, action = '') => {
    switch (action.type) {
        case 'CHANGE_ANSWER':
            return action.answer;

        case 'NEXT_STEP':
            return '';

        default:
            return state;
    }
};
