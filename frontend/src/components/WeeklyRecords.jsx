import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from "./Message"
import Loader from "./Loader"
import { appointmentHistory, periodicAppointmentHistory } from '../actions/appointmentActions.js'
import { Table, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

var DATE = null
var SLOT = null
var ID = null
var OBJECT = null

function WeeklyRecords({ location, history }) {
    const [message, setMessage] = useState(null)
    const [details, setDetails] = useState(null)
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const periodic = useSelector((state) => state.periodicHistory)
    const { loading, error, periodicAppointments } = periodic



    const userAppointments = periodicAppointments

    console.log("appppp")
    console.log(SLOT)


    useEffect(() => {
        dispatch(periodicAppointmentHistory())

    }, [userInfo, dispatch, userLogin, history])

    function assignValue(e) {
        setDetails(e.target.name)
        console.log(e.target.name)
        // DATE = e.target.name
        // SLOT = e.target.id
        ID = e.target.id
        dispatch(appointmentHistory(ID))
        OBJECT = e.target.name
        console.log("success")
        console.log(e.target.name)
        console.log(details)
    }

    console.log(details)

    return (
        <>
            {error && <Message variant='danger'>{error}</Message>}
            {/* {message && <Message variant='danger'>{message}</Message>} */}
            {loading && <Loader />}

            <Table className="text-center mt-5 ml-auto mr-auto" striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Slot no</th>
                        <th>Accessment score</th>
                        <th>Name</th>
                        <th>Details</th>
                        {/* <th>Doctor</th> */}
                    </tr>

                </thead>
                <tbody>
                    {





                        (loading) ? (
                            <Loader />

                        ) : error ? (
                            <Message variant="danger">{error}</Message>
                        ) : (typeof (userAppointments) !== 'undefined') ? (
                            userAppointments.map((object) => {
                                let { user, doctor, date, slot, accessmentScore } = object
                                let { name, age, gender, email, contact } = user
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
                                            ? <>

                                                <Button
                                                    id={slot}
                                                    name={date}
                                                    value={date}
                                                    disabled
                                                // onClick={((e) => { assignValue(e) })}
                                                // onClick={((e) => { setDetails({ date: date, slot: slot, id: user }) })}
                                                >
                                                    Not Assessed
                                                </Button>
                                            </>



                                            : accessmentScore}</td>

                                        <td>{name}</td>
                                        <td>
                                            <LinkContainer to="/analysis">
                                                <Button
                                                    id={user._id}
                                                    name={user}

                                                    onClick={((e) => { assignValue(e) })}
                                                >
                                                    Check Details
                                                  </Button>
                                            </LinkContainer>
                                        </td>
                                    </tr>

                                )
                            })
                        ) : null
                    }


                </tbody>

            </Table>
        </>
    )
}

export default WeeklyRecords
export { DATE, SLOT, ID, OBJECT }
{/* <LinkContainer to="/questionair" >
<Button
    name={date}
    value={slot}
    onClick={(e) => setDetails({ date: e.target.name, slot: e.target.value, id: _id })}
>
    Take Accessment
</Button>
</LinkContainer> */}

{/* <LinkContainer to="/questionair">
                                                <Button
                                                    id={slot}
                                                    name={date}
                                                    value={date}
                                                    onClick={((e) => { assignValue(e) })}
                                                // onClick={((e) => { setDetails({ date: date, slot: slot, id: user }) })}
                                                >
                                                    Take Assessment
                                                </Button>
                                            </LinkContainer> */}