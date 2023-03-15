import React from "react";
import { Button, Card } from "react-bootstrap";

function HomePage({ contacts }) {
	return (
		<div>
			{contacts.map((item) => {
				return (
					<Card key={item.id} style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>{`${item.name} ${item.surname}`}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								{item.phoneNumber}
							</Card.Subtitle>
							<Button variant="danger">Delete</Button>
							<Button className="mx-2" variant="warning">
								Edit
							</Button>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
}

export default HomePage;
