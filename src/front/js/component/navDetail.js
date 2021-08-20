import React, { Component } from "react";

export const NavDetail = () => {
	return (
		<ul className="nav nav-pills nav-fill">
			<li className="nav-item">
				<a className="nav-link" href="#">
					General
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Reseñas
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Politicas de reserva
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link active" href="#">
					Disponibilidad y Tarifas
				</a>
			</li>
		</ul>
	);
};
