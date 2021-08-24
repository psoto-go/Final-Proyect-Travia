import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
export const NavDetail = props => {
	return (
		<>
			<ul className="nav nav-pills nav-fill">
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						General
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						Reseñas
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						Politicas de reserva
					</a>
				</li>
				<li className="nav-item ">
					<a className=" rounded-pill bg-warning text-dark nav-link active" href="#">
						Disponibilidad y Tarifas
					</a>
				</li>
			</ul>
			<hr />
			<div className="parraf">
				<h3>Descripcion</h3>
				<p>{props.description}</p>
			</div>
		</>
	);
};
NavDetail.propTypes = {
	description: PropTypes.string
};
