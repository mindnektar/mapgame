export function changeAnswer(answer) {
    return {type: 'CHANGE_ANSWER', answer};
}

export function changeTab(tab) {
    return {type: 'CHANGE_TAB', tab};
}

export function nextStep() {
    return {type: 'NEXT_STEP'};
}

export function setMarker(step, lat, lng) {
    return {type: 'SET_MARKER', step, lat, lng};
}
