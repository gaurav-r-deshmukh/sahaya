import {
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL
}
    from "../constants/userProfileConstants.js"
import axios from "axios"

export const userProfile = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST })

        const { data } = await axios.get(`/api/profile/${id}`)
        console.log(data)

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })

    }

}

