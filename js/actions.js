export function nextStep() {
    return {type: 'NEXT_STEP'};
}

export function changeAnswer(answer) {
    return {type: 'CHANGE_ANSWER', answer};
}

export function setMarker(step, lat, lng) {
    return {type: 'SET_MARKER', step, lat, lng};
}