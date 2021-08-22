import React, { Component } from "react";

export const HotelServices = () => {
	return (
		<div className="serviciosHotel">
			<h3>Servicios del Hotel</h3>

			<button type="button" className="btn btn-light bg-info text-white">
				Piscina
			</button>

			<button type="button" className="btn btn-light bg-info text-white">
				Restaurante
			</button>

			<button type="button" className="btn btn-light bg-info text-white">
				Gimnasio
			</button>
			<br />
			<a className="text-info" href="#">
				ver todos los servicios
			</a>
		</div>
	);
};
