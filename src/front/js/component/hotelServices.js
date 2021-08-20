import React, { Component } from "react";

export const HotelServices = () => {
	return (
		<div className="serviciosHotel">
			<h3>Servicios del Hotel</h3>

			<button type="button" className="btn btn-light">
				$Piscina
			</button>

			<button type="button" className="btn btn-light">
				$Restaurante
			</button>

			<button type="button" className="btn btn-light">
				$Gimnasio
			</button>
			<br />
			<a href="/">ver todos</a>
		</div>
	);
};
