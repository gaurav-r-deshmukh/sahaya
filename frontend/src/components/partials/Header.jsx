import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userLoginActions.js';
import { Link } from 'react-scroll';

function Header() {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="white">
				<Container className="nav-bar" fluid>
					{/*.nav-bar in bootstrap.min.css */}
					<Navbar.Brand href="/">
						<h2>Sahaya</h2>
					</Navbar.Brand>
					{/* Main Page Navbar */}
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto"></Nav>
						<Nav className="navitems">
							{userInfo ? (
								<NavDropdown
									title={
										userInfo.isAdmin
											? userInfo.name + ' (Admin)'
											: userInfo.name
									}
									id="username"
								>
									<LinkContainer to={`/profile/${userInfo._id}`}>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									{userInfo.isAdmin ? (
										<LinkContainer
											to={`/admindashboard/profile/${userInfo._id}`}
										>
											<NavDropdown.Item>Dashboard</NavDropdown.Item>
										</LinkContainer>
									) : (
										<LinkContainer to={`/dashboard/profile/${userInfo._id}`}>
											<NavDropdown.Item>Dashboard</NavDropdown.Item>
										</LinkContainer>
									)}
									<LinkContainer to="/login">
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							) : (
								<>
									<LinkContainer to="/login">
										<Nav.Link className="navitems">
											<i className="fas fa-user"></i> Sign In
										</Nav.Link>
									</LinkContainer>
									<Nav className="navitems">
										<Nav.Link>
											<Link to="faq" smooth={true} duration={1000}>
												F A Q
											</Link>
										</Nav.Link>
									</Nav>

									<Nav
										className="navitems-aboutus"
										/*style={{
											backgroundColor: '#266150',
											borderRadius: '0.3rem',
										}} */
									>
										<Nav.Link>
											<Link to="aboutus" smooth={true} duration={1000}>
												About Us
											</Link>
										</Nav.Link>
									</Nav>
								</>
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
	);
}

export default Header;
