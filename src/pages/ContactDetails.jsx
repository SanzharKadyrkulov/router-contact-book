import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
	const { id } = useParams();
	const oneContact = contacts.find((item) => item.id == id);
	console.log(oneContact);
	const navigate = useNavigate();
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card style={{ width: "30rem", height: "500px" }}>
				<Card.Img variant="top" src={oneContact.image} />
				{/* <Card.Body
					style={{
						display: "flex",
					}}
				>
					<Card.Title>{oneContact.name}</Card.Title>
					<Card.Title className="mx-4">{oneContact.surname}</Card.Title>
				</Card.Body> */}
			</Card>
			<Card style={{ width: "30rem", height: "500px" }}>
				<Card.Body>
					<Card.Title>{oneContact.name}</Card.Title>
					<Card.Title>{oneContact.surname}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{oneContact.phoneNumber}
					</Card.Subtitle>
					<Button
						onClick={() => navigate(`/edit/${oneContact.id}`)}
						style={{ width: "100px" }}
						variant="success"
					>
						Edit
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ContactDetails;
