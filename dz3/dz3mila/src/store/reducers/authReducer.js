
const initialState = {
    username: '',
    password: '',
    isAuth: false,
    isError: false,
}

export const actions = {
    NAME: "NAME",
    PASS: "PASS",
    ERROR: "ERROR",
    AUTH: "AUTH",
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.NAME:
            return {...state, username: action.payload}
        case actions.PASS:
            return {...state, password: action.payload}
        case actions.ERROR:
            return {...state, isError: action.payload}
        case actions.AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}