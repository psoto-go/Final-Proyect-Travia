import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Countries = () => {
	return (
		<div className="col">
			<Card>
				<Card.Img
					className="country"
					variant="top"
					src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Ibiza_rock_volcano_%28747230830%29.jpg"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/">
							<p style={{ color: "black" }}>4 hoteles</p>
						</Link>
						<h3>Asturias</h3> <Card.Text />
					</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
};
