import express, { json } from "express"
import colors from "colors"
// import questionair from "./data/questionair.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import questionairRoutes from "./routes/questionairRoutes.js"


const app = express()

app.use(express.json())

dotenv.config()

connectDB()

app.get("/", (req, res) => {
    res.send("API is Running...")
})

// app.get("/api/questionair", (req, res) => {
//     res.json(questionair)
// })

app.use("/api/questionair", questionairRoutes)

app.use("/api/profile", userRoutes)

app.use("/api/users", userRoutes)

app.use("/api/appointments", appointmentRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.underline))





