import React, { Component } from "react";

export const Availability = () => {
	return (
		<div>
			<h3>Disponibilidad</h3>
			<div>
				<div className="textMargin">Check-In</div>
				<input type="date" />
				<div className="textMargin">Check-Out</div>
				<input type="date" />
				<i className="fas fa-user-friends textMargin" />
				<input type="number" min="1" max="5" placeholder="0" />
			</div>
			<div className="advice">
				<a href="#">✌ Vivamus cursus libero rhoncus, vehicula tortor ac, lacinia nisl.</a>
			</div>
		</div>
	);
};
