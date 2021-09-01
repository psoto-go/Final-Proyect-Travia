import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import "../../styles/paymentGateway.scss";
import { moment } from "moment";

export const PaymentCard = () => {
	const [detalles, setDetalles] = useState({});
	const reserva = localStorage.getItem("reserva");
	const end_date = localStorage.getItem("end_date");
	const start_date = localStorage.getItem("start_date");
	var fechaI = new Date(start_date);
	var fechaF = new Date(end_date);

	var difM = fechaF - fechaI; // diferencia en milisegundos
	var difD = difM / (1000 * 60 * 60 * 24); // diferencia en dias
	const hab = JSON.parse(reserva);
	const noche = hab.price;
	console.log(typeof difM, typeof difD, typeof 1, typeof noche);
	const total = noche * difD;

	useEffect(() => {
		fetch(api_url + "/api/hotel/" + hab.hotel_id)
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);
	console.log(detalles);
	return (
		<div>
			<div className="card paymentCard">
				<img
					src={detalles.HotelArchives ? detalles.HotelArchives[0].url : ""}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{detalles.name} </h5>
					<p className="card-text">Habitacion {hab.kind}</p>
					<p className="card-text">Numero de camas {hab.number_of_beds}</p>
					<p className="card-text">Numero de personas {hab.number_of_persons}</p>
					<p className="card-text">{`Fechas: ${start_date} - ${end_date}`}</p>
				</div>
				<ul className="list-group list-group-flush ">
					<li className="list-group-item paymentImage border-top">
						<p className="col-6">
							{hab.price}€ x {difD} noches
						</p>
					</li>
					<li className="list-group-item paymentImage border-top">impuestos 0$</li>
					<li className="list-group-item paymentImage border-top">Total {total}€</li>
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
