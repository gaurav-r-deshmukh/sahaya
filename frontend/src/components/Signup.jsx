

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from "./Message"
import Loader from "./Loader"
import FormContainer from './FormContainer'
import { login } from '../actions/userLoginActions'

const Signup = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    // const redirect = location.search ? location.search.split('=')[1] : '/questionair'

    useEffect(() => {
        if (userInfo) {
            if (userInfo.isAdmin === false) {
                // history.push("/questionair")
                history.push(`/dashboard/profile/${userInfo._id}`)

            } else {
                history.push(`/admindashboard/profile/${userInfo._id}`)
            }
        }

    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (

        <FormContainer className="h-100">
            <Container className="border rounded-sm shadow col-lg-9  h-100 p-5 ">
                <h1 className="text-center pb-3">Sign In</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <Button type='submit' variant='primary' className="" block>
                        Sign In
                </Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                        New Customer?{' '}
                        {/* <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> */}
                        <Link to='/register'>
                            Register
                     </Link>
                    </Col>
                </Row>
            </Container>
        </FormContainer>


    )
}

export default Signup
