
import {
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL
}
    from "../constants/userProfileConstants.js"

export const userProfileReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { loading: true, ...state }
        case USER_PROFILE_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

