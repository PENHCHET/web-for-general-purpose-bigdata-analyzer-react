const initState = {
    users: [],
    loading: false,
    error: null
}

const usersReducer = (state  = initState, action) => {
    switch(action.type) {
        case 'FETCH_USER_PENDING':
            return {
                ...state, 
                loading: true
            }
        case 'FETCH_USER_FULFILLED':
            return {
                ...state,
                loading: false,
                users: action.payload.data.items
            }
        case 'FETCH_USER_REJECTED':
            return {
                ...state,
                loading: false,
                error: `${action.payload.message}`
            }
        default:
            return state
    }
}

export default usersReducer