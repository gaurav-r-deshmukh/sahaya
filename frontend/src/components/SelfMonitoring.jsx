import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from "react-bootstrap"
import LineChart from "./LineChart"
import { appointmentHistory } from '../actions/appointmentActions.js'






function SelfMonitoring() {


    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const AppointmentHistory = useSelector((state) => state.appointmentHistory)
    const { Loading, Error, userAppointments } = AppointmentHistory

    var LABELS = []
    var SCORES = []

    console.log(LABELS)
    console.log(SCORES)
    const data = {
        labels: LABELS,
        datasets: [
            {
                label: 'self Monitoring',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: SCORES,
            }
        ]
    }



    useEffect(() => {
        dispatch(appointmentHistory(userInfo._id))

    }, [userInfo, dispatch, userLogin])




    return (
        <Container >
            {   (typeof (userAppointments) !== undefined)
                ?
                userAppointments.map((object) => {
                    let date = new Date(object.date)
                    let actualdate = new Date(date.getTime() - 1000 * 60 * 60 * 5.5)
                    let formatedDate = actualdate.getDate() + "/" + (actualdate.getMonth() + 1) + "/" + actualdate.getFullYear()
                    LABELS.push(formatedDate)
                    SCORES.push(object.accessmentScore)

                })
                : null
            }
            <div className="col-lg-10 text-center m-auto">

                <LineChart data={data} />
            </div>
        </Container>
    )
}

export default SelfMonitoring
