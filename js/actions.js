export function changeAnswer(answer) {
    return {type: 'CHANGE_ANSWER', answer};
}

export function changeTab(tab) {
    return {type: 'CHANGE_TAB', tab};
}

export function inventorySelect(index) {
    return {type: 'INVENTORY_SELECT', index};
}

export function nextStep() {
    return {type: 'NEXT_STEP'};
}

export function setMarker(step, lat, lng) {
    return {type: 'SET_MARKER', step, lat, lng};
}

export function setSteps(steps) {
    return {type: 'SET_STEPS', steps};
}
