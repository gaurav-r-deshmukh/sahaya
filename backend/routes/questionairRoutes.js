import express from "express"
const router = express.Router()
import asyncHandler from "express-async-handler"
import Questionair from "../models/questionairModel.js"


// @desc   fetch all questions and their options
// @route  GET /api/questionair
// @access Public
router.get("/", asyncHandler(async (req, res) => {

    const questionair = await Questionair.find({})
    // res.status(401)
    // throw new Error('Not Authorize')

    res.json(questionair)
}))

export default router