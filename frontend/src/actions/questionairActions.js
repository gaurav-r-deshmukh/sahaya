import axios from "axios"
import { QUESTIONAIR_REQUEST, QUESTIONAIR_SUCCESS, QUESTIONAIR_FAIL } from "../constants/questionairConstants.js"

export const listQuestionair = () => async (dispatch) => {
    try {
        dispatch({ type: QUESTIONAIR_REQUEST })

        const { data } = await axios.get("/api/questionair")
        console.log(data)

        dispatch({
            type: QUESTIONAIR_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: QUESTIONAIR_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })

    }

}