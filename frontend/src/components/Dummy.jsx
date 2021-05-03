import React from 'react'
import { Tab, Row, Col, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Profile from "./Profile"
import Appointment from "./Appointment"
import SelfMonitoring from "./SelfMonitoring"
import Therapy from "./Therapy"

function Dummy() {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const id = userInfo._id
    return (
        <>
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col sm={2} >
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <LinkContainer to={`/dashboard/profile/${id}`}>
                                    <Nav.Link eventKey="first">Profile</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                            <Nav.Item>
                                <LinkContainer to="/dashboard/appointment">
                                    <Nav.Link eventKey="second">Appointments</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                            <Nav.Item>
                                <LinkContainer to="/dashboard/selfmonitoring">
                                    <Nav.Link eventKey="third">Self Monitoring</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                            <Nav.Item>
                                <LinkContainer to="/dashboard/selfhelp">
                                    <Nav.Link eventKey="fourth">Self Help</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Route path="/dashboard/profile/:id" component={Profile} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Route path="/dashboard/appointment" component={Appointment} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Route path="/dashboard/selfmonitoring" component={SelfMonitoring} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Route path="/dashboard/selfhelp" component={Therapy} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </>
    )
}

export default Dummy
