import mongoose from "mongoose"

const questionairSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [
        {
            option: {
                type: String,
                required: true
            },
            points: {
                type: Number,
                required: true
            }

        },
        {
            option: {
                type: String,
                required: true
            },
            points: {
                type: Number,
                required: true
            }

        }
    ]
})

const Questionair = mongoose.model("Questionair", questionairSchema)
export default Questionair