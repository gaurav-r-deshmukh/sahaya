import e from "express"
import asyncHandler from "express-async-handler"
import Appointment from "../models/appointmentModel.js"
import User from "../models/userModel.js"

// @desc   get Appointment history
// @route  post /api/appointment/history
// @access Public

// const getAppointmentHistory = asyncHandler(async (req, res) => {
//     const { id } = req.body
//     console.log("+++" + req.body + "+++")
//     console.log("+++" + id + "+++")
//     const appointments = await Appointment.find({ user: id })
//     console.log(appointments)
//     if (appointments) {
//         res.json(appointments)
//     }
//     else {
//         res.status(404)
//         throw new Error("No appointments")
//     }
// })



// @desc   get Appointment history
// @route  post /api/appointment/app
// @access Public
const getAppointmentHistory = asyncHandler(async (req, res) => {
    const { id } = req.body

    const appointments = await Appointment.find({ user: id }).populate('doctor', 'name').sort({ date: 1 })


    if (appointments) {
        res.json(appointments)
    }
    else {
        res.status(404)
        throw new Error("No appointments")
    }
})


// @desc   get periodic Appointment history
// @route  post /api/appointments/periodic
// @access Public
const getPeriodicAppointments = asyncHandler(async (req, res) => {

    var common = new Date()
    var dd = common.getDate()
    var mm = common.getMonth() + 1
    var yy = common.getFullYear()

    // var date = new Date(yy, mm, dd)
    // var fromDate = new Date(date.getTime() + 1000 * 60 * 60 * 5.5);
    var date = new Date()
    var fromDate = new Date();

    var toDate = new Date();
    // toDate.setDate(toDate.getDate() + 8);

    // toDate = new Date(toDate.getTime() + 1000 * 60 * 60 * 5.5);
    toDate.setDate(toDate.getDate() + 7);
    // console.log(fromDate)
    // console.log(toDate)
    // console.log("****")

    const periodicAppointments = await Appointment.find({ date: { $gte: fromDate, $lte: toDate } }).populate('user').sort({ date: 1 })


    if (periodicAppointments) {
        res.json(periodicAppointments)
    }
    else {
        res.status(404)
        throw new Error("No appointments")
    }
})

// @desc  book Appointment
// @route  post /api/appointments/book
// @access Public
const bookAppointment = asyncHandler(async (req, res) => {
    const { user, date, slot } = req.body
    const id = user
    const d = new Date(date)
    const dd = d.getDate()
    const mm = d.getMonth()
    const yyyy = d.getFullYear()
    const ddmmyyyy = new Date(yyyy, mm, dd)
    const ddmmyyyy2 = new Date(yyyy, mm, dd)

    const fromdate = new Date(ddmmyyyy.getTime() + 1000 * 60 * 60 * 5.5)
    const todate = new Date(ddmmyyyy2.getTime() + (1000 * 60 * 60 * 24 + 1000 * 60 * 60 * 5.5))
    console.log(fromdate)
    console.log(todate)


    // const checkAppointments = await Appointment.find({ date: { "$gte": fromdate, "$lt": todate } })
    const checkAppointments = await Appointment.find({ user: id, date: { "$gte": new Date(new Date(fromdate).getTime() - 1000 * 60 * 60 * 5.5), "$lt": new Date(new Date(todate).getTime() - 1000 * 60 * 60 * 5.5) } })
    console.log("length: " + checkAppointments.length)
    console.log("appointments: " + checkAppointments)

    if (checkAppointments.length >= 1) {
        res.status(400)
        console.log(1)
        throw new Error("Can't book more than one appointment on same day")
        console.log(2)

    }
    else {
        const book = await Appointment.create({ user, date, slot })
        console.log(3)


        if (book) {
            res.status(201).json({
                appointment_id: user,
                date: date,
                slot: slot
            })
        } else {
            res.status(401)
            throw new Error('Not Able to Book Appointment')
        }
    }

})


// @desc    Update user Appointment assesment score
// @route   PUT /api/appointmens/update
// @access  public
const updateAppointmentScore = asyncHandler(async (req, res) => {

    const { date, slot, id, score } = req.body
    const d = new Date(date)
    const dd = new Date(d.getTime())
    // new ((new Date(date).getTime() - 1000 * 60 * 60 * 5.5))
    const appointment = await Appointment.findOne({ slot: slot, date: date })

    console.log("date" + date)
    console.log("slot" + slot)
    console.log(appointment)

    if (appointment) {

        appointment.accessmentScore = score
        console.log(appointment)
        const updatedAppointment = await appointment.save()

        res.json({
            _id: updatedAppointment._id,
            date: updatedAppointment.date,
            slot: updatedAppointment.slot,
            score: updatedAppointment.score

        })
    } else {
        res.status(404)
        throw new Error('Problem Updating Appointment')
    }
})

export { getAppointmentHistory, getPeriodicAppointments, bookAppointment, updateAppointmentScore }