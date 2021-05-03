import mongoose from "mongoose"


const appointmentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    slot: {
        type: Number,
        required: true,
    },
    accessmentScore: {
        type: Number,
        // required: true,

    },
    prescription: {
        type: String,
        // required: true,
    },
    accept: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
})


const Appointment = mongoose.model("Appointment", appointmentSchema)

export default Appointment