import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"

import users from "./data/users.js"
import User from "./models/userModel.js"

import questionair from "./data/questionair.js"
import Questionair from "./models/questionairModel.js"

import appointment from "./data/appointments.js"
import Appointment from "./models/appointmentModel.js"

import connectDB from "./config/db.js"


dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Questionair.deleteMany()
        // await Appointment.deleteMany()

        const createdUsers = await User.insertMany(users)
        const createdQuestionair = await Questionair.insertMany(questionair)
        // const createdAppointment = await Appointment.insertMany(appointment)

        console.log("Data Imported!".green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Questionair.deleteMany()
        // await Appointment.deleteMany()

        console.log("Data Destroyed!".red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}