import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Container, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { userProfile } from "../actions/userProfileAction.js"
import { updateUserProfile } from "../actions/userLoginActions.js"
import Loader from "./Loader"
import Message from "./Message"
import { USER_PROFILE_UPDATE_RESET } from "../constants/userLoginConstants"

function Profile({ match, location, history }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const userProfileData = useSelector(state => state.profile)
    const { loading, error, user } = userProfileData

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const updatedUserProfile = useSelector((state) => state.updateUserProfile)
    let { success } = updatedUserProfile

    useEffect(() => {
        // dispatch(userProfile(match.params.id))

        if (!userInfo) {
            history.push('/login')
        } else {

            if (user._id !== userInfo._id) {
                dispatch(userProfile(userInfo._id))
            }
            if (!user || !user.name || success) {
                dispatch({ type: USER_PROFILE_UPDATE_RESET })
                // dispatch(userProfile(match.params.id))
                dispatch(userProfile(userInfo._id))

            } else {
                setName(user.name)
                setEmail(user.email)
                setGender(user.gender)
                setAge(user.age)
                setContact(user.contact)
            }
        }
    }, [dispatch, match, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password === "") {
            setMessage('Password Cannot be Empty')
        }
        else if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else if (age <= 10 || age >= 100) {
            setMessage('age should be between 10-100 ')
        } else if (contact.length !== 10) {
            setMessage('contact should have 10 digits')
        } else {
            setMessage('Profile Updated Successfully')
            dispatch(updateUserProfile({ id: user._id, name, age, gender, email, contact, password }))

        }
    }
    var sm = "Profile Updated"
    // const { name, age, gender, email, contact } = user
    console.log("gender" + gender)

    return (

        <Container className="border rounded-sm col-lg-11  h-75 pt-3 pb-5 pr-5 pl-5">

            {message && (message === "Profile Updated Successfully" ? <Message variant='success'>{message}</Message> : <Message variant='danger'>{message}</Message>)}
            {/* {success && <Message variant='success'>{sm}</Message>} */}
            {
                loading ? (
                    <Loader />

                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Row>
                        <Col lg={3}>
                            <Image src="/images/profile.jpg" width={171} height={180} thumbnail />

                        </Col>
                        <Col lg={9}>
                            <Form onSubmit={submitHandler} >
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>Gender</Form.Label>
                                            <Row>
                                                <Col>
                                                    <label>
                                                        <input type="radio"
                                                            id="gender"
                                                            checked={gender === "male"}
                                                            value="male"
                                                            onChange={(e) => { setGender("male") }}
                                                            className="mr-2"

                                                        /><span>Male</span>
                                                        {/* <Form.Check
                                                            checked={gender === "male"}
                                                            type="radio"
                                                            label="Male"
                                                            id="gender"
                                                            onChange={(e) => { setGender("male") }}
                                                        /> */}
                                                    </label>

                                                </Col>
                                                <Col>
                                                    <label>
                                                        <input type="radio"
                                                            id="gender"
                                                            checked={gender === "female"}
                                                            value="male"
                                                            onChange={(e) => { setGender("female") }}
                                                            className="mr-2"

                                                        /><span>Female</span>
                                                        {/* <Form.Check
                                                            checked={gender === "female"}
                                                            type="radio"
                                                            label="Female"
                                                            id="gender"
                                                            onChange={(e) => { setGender("female") }}
                                                        /> */}
                                                    </label>

                                                </Col>
                                                <Col>
                                                    <label>
                                                        <input type="radio"
                                                            id="gender"
                                                            checked={gender === "other"}
                                                            value="other"
                                                            onChange={(e) => { setGender("other") }}
                                                            className="mr-2"

                                                        /><span>Other</span>
                                                        {/* <Form.Check
                                                            checked={gender === "other"}
                                                            type="radio"
                                                            label="Other"
                                                            id="gender"
                                                            onChange={(e) => { setGender("other") }}
                                                        /> */}
                                                    </label>
                                                </Col>
                                            </Row>
                                            {/* <Form.Control
                                                type="text"
                                                placeholder="Enter gender"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}

                                            /> */}
                                            {/* <input type="radio"
                                                id="gender"
                                                checked={gender === "male"}
                                                value="male"
                                                onChange={(e) => { setGender("male") }} 
                                                className="ml-3"

                                            /><span>Male</span> */}



                                        </Col>
                                        <Col>
                                            <Form.Label>Age</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter age"
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        readOnly
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Contact"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}

                                    />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Enter password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Confirm password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Button type='submit' variant='primary'>
                                    Update Profile & Password
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                )
            }

        </Container>
    )
}

export default Profile

