export function changeAnswer(answer) {
    return {type: 'CHANGE_ANSWER', payload: {answer}};
}

export function changeTab(tab) {
    return {type: 'CHANGE_TAB', payload: {tab}};
}

export function inventorySelect(index) {
    return {type: 'INVENTORY_SELECT', payload: {index}};
}

export function nextStep() {
    return {type: 'NEXT_STEP'};
}

export function setMarker(step, lat, lng) {
    return {type: 'SET_MARKER', payload: {step, lat, lng}};
}

export function setSteps(steps) {
    return {type: 'SET_STEPS', payload: {steps}};
}
