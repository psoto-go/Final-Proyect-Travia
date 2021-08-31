import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import "../../styles/paymentGateway.scss";

export const PaymentCard = () => {
	const [detalles, setDetalles] = useState({});
	const reserva = localStorage.getItem("reserva");
	const hab = JSON.parse(reserva);
	useEffect(() => {
		fetch(api_url + "/api/hotel/" + hab.hotel_id)
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);
	console.log(typeof detalles);
	return (
		<div>
			<div className="card paymentCard">
				{/* <img src={detalles.HotelArchives[0].url} className="card-img-top" alt="..." /> */}
				<div className="card-body">
					<h5 className="card-title">{detalles.name} </h5>
					<p className="card-text">Habitacion {hab.kind}</p>
					<p className="card-text">Numero de camas {hab.number_of_beds}</p>
					<p className="card-text">Numero de personas {hab.number_of_persons}</p>
					<p className="card-text">Lun 28 de sep 2021 - Mie 30 de Mar 2022</p>
				</div>
				<ul className="list-group list-group-flush ">
					<li className="list-group-item paymentImage border-top">
						<p className="col-6">$7 x 170 noches $1200</p>
					</li>
					<li className="list-group-item paymentImage border-top">impuestos 0$</li>
					<li className="list-group-item paymentImage border-top">Total $1200</li>
				</ul>
				<div className="card-body text-center">
					<p>Agregar codigo promocional</p>
				</div>
			</div>
			<div className="card descPayment mt-5">
				<div className="card-body">
					<h5 className="card-title">Ut tincidunt ipsum</h5>
					<p className="card-text">
						Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum cursus tempus quis
						scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum cursus tempus
						quis scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum cursus
						tempus quis scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum
						cursus tempus quis scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt
						ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut
						tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum cursus tempus quis
						scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum cursus tempus
						quis scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum cursus
						tempus quis scelerisque. Ut tincidunt ipsum cursus tempus quis scelerisque. Ut tincidunt ipsum
						cursus tempus quis scelerisque.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
