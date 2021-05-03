import React from "react"
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../actions/userLoginActions.js"

function Header() {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">

                <Container>
                    <Navbar.Brand href="#home"><h2>Sahaya</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            {userInfo ? (
                                <NavDropdown title={userInfo.isAdmin ? userInfo.name + " (Admin)" : userInfo.name} id='username'>
                                    <LinkContainer to={`/profile/${userInfo._id}`}>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    {
                                        userInfo.isAdmin
                                            ? <LinkContainer to={`/admindashboard/profile/${userInfo._id}`}>
                                                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                            </LinkContainer>
                                            : <LinkContainer to={`/dashboard/profile/${userInfo._id}`}>
                                                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                            </LinkContainer>
                                    }
                                    {/* <LinkContainer to={`/dashboard/profile/${userInfo._id}`}>
                                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                    </LinkContainer> */}
                                    <LinkContainer to='/login'>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                  </Nav.Link>
                                </LinkContainer>
                            )}
                            {/* <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fas fa-user mr-2"></i> Sign in
                            </Nav.Link>
                            </LinkContainer> */}
                            {/* <Button variant="light">Sign up</Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )
}

export default Header
