import React from 'react'
import { Tabs, Tab } from "react-bootstrap"
import Records from "./Records"
import Scheduler from "./Scheduler"
import { useDispatch, useSelector } from "react-redux"
import AdminScheduler from "./AdminScheduler"
import WeeklyRecords from "./WeeklyRecords"
function Appointment() {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (
        <>{userInfo.isAdmin
            ? <Tabs defaultActiveKey="appointment">
                <Tab eventKey="appointment" title="Appointment Details">
                    <AdminScheduler />
                </Tab>
                <Tab eventKey="history" title="Records">
                    <WeeklyRecords />
                </Tab>
            </Tabs>
            :
            <Tabs defaultActiveKey="appointment">
                <Tab eventKey="appointment" title="Book Appointment">
                    <Scheduler />
                </Tab>
                <Tab eventKey="history" title="Appointment Records">
                    <Records />
                </Tab>
            </Tabs>
        }
            {/* <Tabs defaultActiveKey="appointment">
                <Tab eventKey="appointment" title="Book Appointment">
                    <Scheduler />
                </Tab>
                <Tab eventKey="history" title="Appointment Records">
                    <Records />
                </Tab>
            </Tabs> */}
        </>
    )
}

export default Appointment
