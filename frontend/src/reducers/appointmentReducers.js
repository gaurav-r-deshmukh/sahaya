import {
    USER_APPOINTMENT_HISTORY_REQUEST,
    USER_APPOINTMENT_HISTORY_SUCCESS,
    USER_APPOINTMENT_HISTORY_FAIL,
    USER_PERIODIC_APPOINTMENT_HISTORY_REQUEST,
    USER_PERIODIC_APPOINTMENT_HISTORY_SUCCESS,
    USER_PERIODIC_APPOINTMENT_HISTORY_FAIL,
    USER_BOOK_APPOINTMENT_REQUEST,
    USER_BOOK_APPOINTMENT_SUCCESS,
    USER_BOOK_APPOINTMENT_FAIL,
    USER_UPDATE_APPOINTMENT_REQUEST,
    USER_UPDATE_APPOINTMENT_SUCCESS,
    USER_UPDATE_APPOINTMENT_FAIL

} from "../constants/appointmentConstants.js"

export const appointmentHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_APPOINTMENT_HISTORY_REQUEST:
            return { loading: true, userAppointments: [] }
        case USER_APPOINTMENT_HISTORY_SUCCESS:
            return { loading: false, userAppointments: action.payload }
        case USER_APPOINTMENT_HISTORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const periodicAppointmentHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PERIODIC_APPOINTMENT_HISTORY_REQUEST:
            return { loading: true, periodicAppointments: [] }
        case USER_PERIODIC_APPOINTMENT_HISTORY_SUCCESS:
            return { loading: false, periodicAppointments: action.payload }
        case USER_PERIODIC_APPOINTMENT_HISTORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const bookAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_BOOK_APPOINTMENT_REQUEST:
            return { Loading: true, bookAppointments: {} }
        case USER_BOOK_APPOINTMENT_SUCCESS:
            return { Loading: false, bookAppointments: action.payload }
        case USER_BOOK_APPOINTMENT_FAIL:
            return { Loading: false, Error: action.payload }
        default:
            return state
    }
}



export const updateAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_APPOINTMENT_REQUEST:
            return { loading: true, updatedAppointment: {} }
        case USER_UPDATE_APPOINTMENT_SUCCESS:
            return { loading: false, updatedAppointment: action.payload }
        case USER_UPDATE_APPOINTMENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}