import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { HotelServices } from "../component/hotelServices";
import { api_url } from "../constants";
import { useParams } from "react-router-dom";

export const NavDetail = props => {
	const [hotel, setHotel] = useState({});
	const params = useParams();

	useEffect(() => {
		fetch(api_url + "/api/hotel/" + params.theid)
			.then(response => response.json())
			.then(result => {
				setHotel(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	const listServices = hotel.services
		? hotel.services.map((item, index) => {
				return <HotelServices key={index} service={item.name} />;
		  })
		: "";

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
			<div className="row">
				<div className="col-lg-12 col-xl-6">
					<h3>Descripcion</h3>
					<p>{props.description}</p>
				</div>
				<div className=" col-lg-12 col-xl-6">
					<h3>Servicios del Hotel</h3>
					{listServices}
				</div>
			</div>
		</>
	);
};
NavDetail.propTypes = {
	description: PropTypes.string
};
