const policyLanguageReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUT_POLICIES':
            return action.payload;
        default:
            return state;
    }
}


export default policyLanguageReducer