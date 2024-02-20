export const initialState = null

export const reducer = (state, action) => {
    if(action.type == "USER"){
        return action.payload
    }
    if(action.type == "CLEAR"){
        return null
    }
    if(action.type == "UPDATEFIELDS"){
        return{
            ...state,
            name: action.payload.name,
            username: action.payload.username,
            email: action.payload.email
        }
    }

    return state
} 