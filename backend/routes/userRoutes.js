import express from "express"
const router = express.Router()
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import { authUser, getUserProfile, registerUser, updateUserProfile } from "../controllers/userController.js"


router.post("/login", authUser)
router.route('/register').post(registerUser)

router.route("/profile").get(getUserProfile).put(updateUserProfile)

// router.put(updateUserProfile)

// @desc   fetch single person
// @route  GET /api/person/:id
// @access Public
router.get("/:id", asyncHandler(async (req, res) => {
    const person = await User.findById(req.params.id)
    if (person) {

        res.json(person)
    } else {
        res.status(404)
        throw new Error("person/user not found")

    }

}))




export default router