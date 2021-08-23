import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/index.scss";

export const HotelPrices = props => {
	return (
		<div className="card">
			<a>
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				{"  "}
				<a>
					Servicios <i className="fas fa-dumbbell" /> <i className="fas fa-wifi" />{" "}
					<i className="fas fa-wheelchair" /> <i className="fas fa-paw" />
				</a>
				<hr />
			</a>

			<div>
				<div>
					<div className="row">
						<div className="col-4">
							<img className="card-img" src={props.url} alt="imagen" />
						</div>
						<div className="col-4">
							<p>
								Habitación {props.kind} Especificaciones:{" "}
								<li>{`Numero de personas: ${props.persons}`}</li>
								<li>{`Numero de camas: ${props.beds}`}</li>
								<li>{`Precio noche: ${props.price}€`}</li>
							</p>
						</div>
						<div className="col-4">
							<Link to={"/"} className="btn btn-primary">
								Reservar!
							</Link>
							<h6>{`Reserva por ${props.price}€ / noche (impuestos incluidos)`}</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
HotelPrices.propTypes = {
	url: PropTypes.string,
	persons: PropTypes.string,
	beds: PropTypes.string,
	price: PropTypes.number,
	kind: PropTypes.string
};
