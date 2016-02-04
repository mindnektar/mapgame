export function changeAnswer(answer) {
    return (dispatch, getState) => {
        dispatch({type: 'CHANGE_ANSWER', payload: {answer}});

        const {steps} = getState();
        const valid = answer === steps.items[steps.current].answer.value;

        dispatch({type: 'SET_VALIDITY', payload: {valid}});
    };
}

export function changeTab(tab) {
    return {type: 'CHANGE_TAB', payload: {tab}};
}

export function inventorySelect(index) {
    return {type: 'INVENTORY_SELECT', payload: {index}};
}

export function nextStep() {
    return (dispatch, getState) => {
        dispatch({type: 'NEXT_STEP'});
        dispatch({type: 'CHANGE_ANSWER', payload: {answer: ''}});

        const {steps} = getState();
        const valid = !steps.items[steps.current].answer;

        dispatch({type: 'SET_VALIDITY', payload: {valid}});
    };
}

export function setMarker(step, lat, lng) {
    return (dispatch, getState) => {
        dispatch({type: 'SET_MARKER', payload: {step, lat, lng}});

        const {steps} = getState();
        const valid = google.maps.geometry.poly.containsLocation(
            new google.maps.LatLng(lat, lng),
            new google.maps.Polygon({paths: steps.items[steps.current].answer.value})
        );

        dispatch({type: 'SET_VALIDITY', payload: {valid}});
    };
}

export function setSteps(steps) {
    return {type: 'SET_STEPS', payload: {steps}};
}
