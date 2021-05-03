import React, { useState, useEffect } from 'react'
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { periodicAppointmentHistory, bookAppointment, appointmentHistory } from "../actions/appointmentActions.js"
import { USER_PERIODIC_APPOINTMENT_HISTORY_REQUEST, USER_PERIODIC_APPOINTMENT_HISTORY_SUCCESS } from '../constants/appointmentConstants.js'
import Loader from "./Loader"
import Message from "./Message"

function AdminScheduler() {
    const [slotno, setSlot] = useState({ date: null, slot: null })
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const periodic = useSelector((state) => state.periodicHistory)
    const { loading, error, periodicAppointments } = periodic

    console.log(periodicAppointments)

    const bookedAppointments = useSelector((state) => state.bookAppointment)
    const { Loading, Error, bookAppointments } = bookedAppointments

    console.log("message" + message)


    useEffect(() => {
        if (Loading || Error) {
            dispatch(periodicAppointmentHistory())
            dispatch(appointmentHistory(userInfo._id))

        }
        dispatch(periodicAppointmentHistory())
        console.log("called")

    }, [dispatch, userLogin, Loading, Error, bookAppointments])

    let boo = false
    const submitHandler = (e) => {
        // e.preventDefault()
        if (slotno.slot !== null) {
            dispatch(bookAppointment(userInfo._id, slotno.date, slotno.slot))
            dispatch(periodicAppointmentHistory())
            dispatch(appointmentHistory(userInfo._id))
            boo = true

        }

    }

    console.log(slotno.date)
    console.log(slotno.slot)

    let slots = ["10:00", "10:30", "11:00", "11:30", "12:00"]
    let week = [0, 1, 2, 3, 4, 5, 6]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let d = new Date(slotno.date)
    let c = new Date(d.getTime() - 1000 * 60 * 60 * 5.5)
    let ddd = c.getDate()
    let m = c.getMonth()
    let y = c.getFullYear()
    const success = "Appointment booked successfully"


    return (
        <>

            {/* {  Error ? <div className="mt-3"><Message variant='danger'>{Error}</Message> </div> : <div className="mt-3"><Message variant='success'>{success}</Message></div>} */}
            {/* {  message && <Message variant='success'>{message}</Message>} */}
            {


                error ? <Message variant='danger'>{error}</Message> :
                    loading
                        ? <Loader />
                        : <> {slotno.slot ? <h7>
                            <Form onSubmit={submitHandler}>
                                <Container>
                                    <Row className="m-4">
                                        <Col><h5 className="text-success">You choose slot on {ddd + "-" + months[m] + "-" + y} at {slots[slotno.slot]} AM</h5>
                                        </Col>
                                        <Col><Button type='submit' variant='success'>
                                            Book Appointment
                                  </Button></Col>
                                    </Row>
                                </Container>

                            </Form>

                        </h7> : <p></p>}

                            <Table className="text-center" bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>10:00 AM</th>
                                        <th>10:30 AM</th>
                                        <th>11:00 AM</th>
                                        <th>11:30 AM</th>
                                        <th>12:00 AM</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        (typeof (week) !== 'undefined') ? (
                                            week.map((object) => {
                                                let dateValidateObject = new Date()
                                                {/* if (object == 0) {
                                                var dateObject = new Date(dateValidateObject.getTime() + 5.5 * 1000 * 60 * 60)
                                            } else {
                                                var dateObject = new Date(dateValidateObject.getTime() + 1000 * 60 * 60 * 24 * object + 5.5 * 1000 * 60 * 60)
                                            } */}
                                                var dateObject = new Date(dateValidateObject.getTime() + 1000 * 60 * 60 * 24 * object)
                                                var toutc = new Date(dateObject.getTime() + 1000 * 60 * 60 * 5.5).toISOString();

                                                let dd = dateObject.getDate()
                                                let mm = dateObject.getMonth()
                                                let yyyy = dateObject.getFullYear()
                                                let formatedDate = dateObject.getDate() + "-" + months[dateObject.getMonth()] + "-" + dateObject.getFullYear();
                                                let numberButtons = [0, 1, 2, 3, 4]
                                                let boolArray = [0, 0, 0, 0, 0]

                                                return (

                                                    <tr>
                                                        <th>{formatedDate}</th>
                                                        {(typeof (periodicAppointments) !== 'undefined') ? (
                                                            periodicAppointments.map((object) => {

                                                                const { date, slot } = object
                                                                let date1 = new Date(date)
                                                                var date2 = new Date(date1.getTime() - 1000 * 60 * 60 * 5.5);
                                                                let formatedDate2 = date2.getDate() + "-" + months[date2.getMonth()] + "-" + date2.getFullYear();
                                                                if (formatedDate == formatedDate2) {
                                                                    boolArray[slot] = 1
                                                                }


                                                            })
                                                        ) : null
                                                        }
                                                        {


                                                            numberButtons.map((SLOT) => {

                                                                return (<td>
                                                                    <Button
                                                                        variant={1 == boolArray[SLOT] ? "danger" : "success"}
                                                                        // name={new Date(yyyy, mm, dd)}
                                                                        name={toutc}

                                                                        value={SLOT}
                                                                        onClick={(e) => setSlot({ date: e.target.name, slot: e.target.value })}
                                                                        disabled={1 == boolArray[SLOT] ? true : true}

                                                                    >
                                                                        {1 == boolArray[SLOT] ? "BOOKED" : "FREE"}
                                                                    </Button>
                                                                </td>
                                                                )
                                                            })


                                                        }

                                                    </tr>
                                                )


                                            })




                                        ) : <p></p>
                                    }





                                </tbody>

                            </Table></>
            }



        </>
    )

}


export default AdminScheduler
