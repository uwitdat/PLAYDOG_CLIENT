import { Link } from "react-router-dom";
import React from 'react'
import './LandingPage.css'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({state}) => {
	return (
		<div>
			<Navbar className="shadow-sm" id="mainNav" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
				<Container>
					<Navbar.Brand href="#home">Walkie</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link style={{marginRight: '10px'}} href="#features">Features</Nav.Link>
							<Nav.Link style={{marginRight: '10px'}} href="#download">Downloads</Nav.Link>
						</Nav>
						<Link to='/login'>
							<button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
								<span className="d-flex align-items-center">
									<i className="bi-person-circle me-2"></i>
									<span className="">Login</span>
								</span>
							</button>
						</Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavBar;