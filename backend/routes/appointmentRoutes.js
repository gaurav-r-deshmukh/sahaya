import express from "express"
const router = express.Router()

import { getAppointmentHistory, getPeriodicAppointments, bookAppointment, updateAppointmentScore } from "../controllers/appointmentController.js"

router.route('/app').post(getAppointmentHistory)
router.route('/book').post(bookAppointment)
router.route('/periodic').get(getPeriodicAppointments)
router.route('/update').put(updateAppointmentScore)

//.get(getAppointmentHistory)
export default router