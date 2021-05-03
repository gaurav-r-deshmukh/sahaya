import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from "./Message"
import Loader from "./Loader"
import { appointmentHistory } from '../actions/appointmentActions.js'
import { Table, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

var DATE = null
var SLOT = null
var ID = null

function Records({ location, history }) {
    const [message, setMessage] = useState(null)
    const [details, setDetails] = useState({ date: null, slot: null, id: null })
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const bookedAppointments = useSelector((state) => state.bookAppointment)
    const { bookAppointments } = bookedAppointments


    // const { appointments, extra } = userAppointments


    const AppointmentHistory = useSelector((state) => state.appointmentHistory)
    const { Loading, Error, userAppointments } = AppointmentHistory

    console.log("appppp")
    console.log(SLOT)


    useEffect(() => {
        dispatch(appointmentHistory(userInfo._id))

    }, [userInfo, dispatch, userLogin, bookAppointments, history])

    function assignValue(e) {
        setDetails({ date: e.target.name, slot: e.target.id, id: userInfo._id })
        console.log(e.target.name)
        DATE = e.target.name
        SLOT = e.target.id
        ID = userInfo._id
        console.log("success")
        console.log(DATE + "---" + SLOT)
        console.log(details)
    }

    console.log(details)

    return (
        <>
            {error && <Message variant='danger'>{error}</Message>}
            {message && <Message variant='danger'>{message}</Message>}
            {loading && <Loader />}

            <Table className="text-center mt-5 ml-auto mr-auto" striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Slot no</th>
                        <th>Accessment score</th>
                        <th>Prescription</th>
                        {/* <th>Doctor</th> */}
                    </tr>

                </thead>
                <tbody>
                    {





                        (loading || Loading) ? (
                            <Loader />

                        ) : error ? (
                            <Message variant="danger">{error}</Message>
                        ) : Error ? (
                            <Message variant="danger">{Error}</Message>
                        ) : (typeof (userAppointments) !== 'undefined') ? (
                            userAppointments.map((object) => {
                                let { accept, _id, user, doctor, date, slot, accessmentScore, prescription } = object
                                var d = new Date(date);
                                var dd = new Date(d.getTime() - 60 * 60 * 1000 * 5.5)
                                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                let formatedDate = dd.getDate() + "-" + months[dd.getMonth()] + "-" + dd.getFullYear();
                                let timeslot = ["10-10:30", "10:30-11", "11-11:30", "11:30-12", "12-12:30"]
                                let formatedSlot = timeslot[slot]


                                return (
                                    <tr>
                                        <td>{formatedDate}</td>
                                        <td>{formatedSlot}</td>
                                        <td>{accessmentScore == null
                                            ?
                                            <LinkContainer to="/questionair">
                                                <Button
                                                    id={slot}
                                                    name={date}
                                                    value={date}
                                                    onClick={((e) => { assignValue(e) })}
                                                // onClick={((e) => { setDetails({ date: date, slot: slot, id: user }) })}
                                                >
                                                    Take Assessment
                                                </Button>
                                            </LinkContainer>





                                            : accessmentScore}</td>
                                        <td>{prescription}</td>
                                        {/* <td>{doctor.name}</td> */}
                                    </tr>

                                )
                            })
                        ) : <p></p>
                    }


                </tbody>

            </Table>
        </>
    )
}

export default Records
export { DATE, SLOT, ID }
{/* <LinkContainer to="/questionair" >
<Button
    name={date}
    value={slot}
    onClick={(e) => setDetails({ date: e.target.name, slot: e.target.value, id: _id })}
>
    Take Accessment
</Button>
</LinkContainer> */}