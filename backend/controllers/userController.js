import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"



// @desc   auth user and get token
// @route  POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })




    if (user && (await user.matchPassword(password))) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
})

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, contact, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        contact,
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,

        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc   get user profile
// @route  get /api/users/profile
// @access Public

const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,

        })
    }
    else {
        res.status(404)
        throw new Error("User not Found")
    }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.body.id)

    if (user) {
        user.name = req.body.name || user.name
        user.gender = req.body.gender || user.gender
        user.age = req.body.age || user.age
        user.email = req.body.email || user.email
        user.contact = req.body.contact || user.contact



        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin

        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

export { authUser, getUserProfile, registerUser, updateUserProfile }