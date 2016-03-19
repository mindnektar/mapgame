export function addItems(items) {
    return {type: 'ADD_ITEMS', payload: {items}};
}

export function changeAnswer(answer) {
    return (dispatch, getState) => {
        dispatch({type: 'CHANGE_ANSWER', payload: {answer}});

        const {steps} = getState();
        const valid = answer.toLowerCase() === steps.items[steps.current].answer.value;

        dispatch(setValidity(valid));
    };
}

export function changeTab(tab) {
    return {type: 'CHANGE_TAB', payload: {tab}};
}

export function inventorySelect(index, triggerNextStep) {
    return dispatch => {
        dispatch({type: 'INVENTORY_SELECT', payload: {index, triggersNextStep: false}});

        if (triggerNextStep) {
            dispatch(nextStep());
        }
    };
}

export function nextStep() {
    return (dispatch, getState) => {
        dispatch({type: 'NEXT_STEP'});
        dispatch({type: 'CHANGE_ANSWER', payload: {answer: ''}});

        const {steps} = getState();
        const valid = steps.items[steps.current] ? !steps.items[steps.current].answer : false;

        dispatch(setValidity(valid));

        if (steps.items[steps.current] && steps.items[steps.current].items) {
            dispatch(addItems(steps.items[steps.current].items));
        }

        if (steps.items[steps.current] && steps.items[steps.current].polylines) {
            steps.items[steps.current].polylines.forEach(polyline => dispatch(setPolyline(polyline)));
        }
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

        dispatch(setValidity(valid));
    };
}

export function setPolyline(polyline) {
    return {type: 'SET_POLYLINE', payload: {polyline}};
}

export function setSteps(steps) {
    return (dispatch, getState) => {
        dispatch({type: 'SET_STEPS', payload: {steps}});

        const valid = !getState().steps.items[0].answer;

        dispatch(setValidity(valid));
    };
}

export function setValidity(valid) {
    return {type: 'SET_VALIDITY', payload: {valid}};
}

export function start() {
    return {type: 'START'};
}
