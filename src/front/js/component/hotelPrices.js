import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/index.scss";

export const HotelPrices = props => {
	return (
		<div className="card">
			{/* <a>
				 <i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" /> 
				
				 <a>
					Servicios <i className="fas fa-dumbbell" /> <i className="fas fa-wifi" />{" "}
					<i className="fas fa-wheelchair" /> <i className="fas fa-paw" />
				</a> 
				<hr />
			</a> */}

			<div className="row align-items-center align-items-end">
				<div className="col-4 " style={{ maxWidth: "350px", minWidth: "252px" }}>
					<img
						src={props.url}
						alt="imagen"
						style={{ maxWidth: "100%", minHeight: "200px", maxHeight: "200px" }}></img>
				</div>
				<div className="col">
					<p>
						Habitación {props.kind} Especificaciones: <li>{`Numero de personas: ${props.persons}`}</li>
						<li>{`Numero de camas: ${props.beds}`}</li>
						<li>{`Precio noche: ${props.price}€`}</li>
					</p>
				</div>
				<div className="col">
					<Link
						to="/payment"
						className="btn bg-warning"
						onClick={() => {
							localStorage.setItem("reserva", JSON.stringify(props.item));
						}}>
						Reservar!
					</Link>
					<h6>{`Reserva por ${props.price}€ / noche (impuestos incluidos)`}</h6>
				</div>
			</div>
		</div>
	);
};
HotelPrices.propTypes = {
	url: PropTypes.string,
	persons: PropTypes.number,
	beds: PropTypes.number,
	price: PropTypes.number,
	kind: PropTypes.string,
	item: PropTypes.object
};
