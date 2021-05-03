import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { questionairReducer } from "./reducers/questionairReducer.js"
import { userProfileReducer } from "./reducers/userProfileReducer.js"
import { userLoginReducer, userRegisterReducer, updateUserProfileReducer } from "./reducers/userLoginReducers.js"
import { appointmentHistoryReducer, periodicAppointmentHistoryReducer, bookAppointmentReducer, updateAppointmentReducer } from "./reducers/appointmentReducers.js"

const reducer = combineReducers({
    questionairList: questionairReducer,
    profile: userProfileReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    appointmentHistory: appointmentHistoryReducer,
    updateUserProfile: updateUserProfileReducer,
    periodicHistory: periodicAppointmentHistoryReducer,
    bookAppointment: bookAppointmentReducer,
    updateAppointment: updateAppointmentReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store