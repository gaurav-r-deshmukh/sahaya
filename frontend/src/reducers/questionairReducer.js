import { QUESTIONAIR_REQUEST, QUESTIONAIR_SUCCESS, QUESTIONAIR_FAIL } from "../constants/questionairConstants.js"

export const questionairReducer = (state = { questionair: [] }, action) => {
    switch (action.type) {
        case QUESTIONAIR_REQUEST:
            return { loading: true, questionair: [] }
        case QUESTIONAIR_SUCCESS:
            return { loading: false, questionair: action.payload }
        case QUESTIONAIR_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}