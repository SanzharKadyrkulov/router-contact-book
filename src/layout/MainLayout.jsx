import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function MainLayout() {
	return (
		<div>
			<Navbar />
			<Container>
				<Outlet />
			</Container>
		</div>
	);
}

export default MainLayout;
