import React, { Component } from "react";
import { HotelServices } from "../component/hotelServices";
import "../../styles/index.scss";
export const Availability = () => {
	return (
		<div>
			<HotelServices />
			<h3>Disponibilidad</h3>
			<div className="p-3 mb-4 mt-4 bg-light text-dark rounded-pill ajustDate">
				<div className="textMargin">Entrada</div>
				<input type="date" />
				<div className="textMargin">Salida</div>
				<input type="date" />
				<i className="fas fa-user-friends textMargin" />
				<input type="number" min="1" max="5" placeholder="0" />
			</div>
		</div>
	);
};
