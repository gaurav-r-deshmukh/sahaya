import axios from "axios"
import {
    USER_APPOINTMENT_HISTORY_FAIL,
    USER_APPOINTMENT_HISTORY_REQUEST,
    USER_APPOINTMENT_HISTORY_SUCCESS,
    USER_BOOK_APPOINTMENT_FAIL,
    USER_BOOK_APPOINTMENT_REQUEST,
    USER_BOOK_APPOINTMENT_SUCCESS,
    USER_PERIODIC_APPOINTMENT_HISTORY_FAIL,
    USER_PERIODIC_APPOINTMENT_HISTORY_REQUEST,
    USER_PERIODIC_APPOINTMENT_HISTORY_SUCCESS,
    USER_UPDATE_APPOINTMENT_FAIL,
    USER_UPDATE_APPOINTMENT_REQUEST,
    USER_UPDATE_APPOINTMENT_SUCCESS
} from "../constants/appointmentConstants.js"

export const appointmentHistory = (id) => async (dispatch) => {
    try {
        dispatch({
            type: USER_APPOINTMENT_HISTORY_REQUEST
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(
            "/api/appointments/app",
            { id },
            config
        )



        dispatch({
            type: USER_APPOINTMENT_HISTORY_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: USER_APPOINTMENT_HISTORY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const periodicAppointmentHistory = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_PERIODIC_APPOINTMENT_HISTORY_REQUEST
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.get(
            "/api/appointments/periodic",
            config
        )

        // const { data } = await axios.get(
        //     "/api/appointments/app",
        //     { id },
        //     config
        // )
        console.log(data)

        dispatch({
            type: USER_PERIODIC_APPOINTMENT_HISTORY_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: USER_PERIODIC_APPOINTMENT_HISTORY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const bookAppointment = (user, date, slot) => async (dispatch) => {
    try {
        dispatch({
            type: USER_BOOK_APPOINTMENT_REQUEST
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(
            "/api/appointments/book",
            { user, date, slot },
            config
        )
        console.log(data)


        dispatch({
            type: USER_BOOK_APPOINTMENT_SUCCESS,
            payload: data
        })



    } catch (error) {
        dispatch({
            type: USER_BOOK_APPOINTMENT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const updateAppointmentScore = (appointment) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_APPOINTMENT_REQUEST,
        })



        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const { data } = await axios.put("/api/appointments/update", appointment, config)

        dispatch({
            type: USER_UPDATE_APPOINTMENT_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: USER_UPDATE_APPOINTMENT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}