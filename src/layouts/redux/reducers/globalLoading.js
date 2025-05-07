const inititalstate = {
    status: false
}

const globalLoading = (state = inititalstate, action) => {
    switch (action.type) {
        case 'CONTROL_LOADING':
            state = {
                status: action.status
            }
            return state;
        default:
            return state
    }
}

export default globalLoading;