import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
	return (
		<div>
			<Navbar bg="light" variant="light">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>
							<Link to="">Add Product</Link>
						</Nav.Link>
						<Nav.Link>Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default AppNavbar;
