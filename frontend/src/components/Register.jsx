import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'
import FormContainer from './FormContainer'
import { register } from '../actions/userLoginActions.js'

const Register = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error } = userRegister
    const userLogin = useSelector((state) => state.userLogin)
    // const { loading, error, userInfo } = userLogin
    const { userInfo } = userLogin



    // const redirect = location.search ? location.search.split('=')[1] : '/login'

    useEffect(() => {
        if (userInfo) {
            // history.push(redirect)
            history.push('/login')
        }

    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (name === "") {
            setMessage('All fields are Mandatory')
        } else if (contact.length !== 10) {
            setMessage('contact should have 10 digits')
        } else if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            setMessage(null)
            dispatch(register(name, email, contact, password))
        }
    }

    return (
        <FormContainer>
            <Container className="border rounded-sm shadow col-lg-10  h-100 pt-3 pb-2 pr-5 pl-5">
                <h1 className="text-center pb-2">Sign Up</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {message && <Message variant='danger'>{message}</Message>}

                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='contact'>
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Contact'
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' block>
                        Register
                </Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                        Have an Account?{' '}
                        {/* <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}> */}
                        <Link to='/login'>

                            Login
          </Link>
                    </Col>
                </Row>
            </Container>
        </FormContainer>
    )
}

export default Register