import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import "../../styles/admDash.scss";

export const AdminHoteles = () => {
	const [hotel, setHotel] = useState([]);

	useEffect(() => {
		fetch(api_url + "/api/hotels")
			.then(response => response.json())
			.then(result => {
				setHotel(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	const listhotels = hotel.map((item, index) => {
		return (
			<button key={index} type="button" className="buttonHotels list-group-item list-group-item-action">
				<div className="hotelImg">
					<img src={item.HotelArchives[0].url} style={{ width: "300px" }} />
					<div className="content-1">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<Link to={"hotel/" + item.id}>Pagina del Hotel</Link>

								<p className="card-text">{item.description}</p>
							</div>
						</div>
					</div>
					<div className="content-2">
						<h5 className="resePunto">4.8 reseñas</h5>
						<h5 className="resePunto">★★★★</h5>
						<div>
							<button type="button" className="reseñas btn btn-secondary">
								Mostrar Reseñas
							</button>
						</div>
					</div>
					<div className="content-3">
						<div className="dropdown">
							<button
								className="btn"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								<i className="fas fa-ellipsis-v" />
							</button>
						</div>
					</div>
				</div>
			</button>
		);
	});
	return (
		<>
			<div>
				<div className="container  text-center">
					<div className="row conjunto">
						<div className="col-md-4">
							<h1>Hoteles</h1>
						</div>
						<div className="col-md-4 ml-auto">
							<Link to="#">Dashboard</Link> / Hoteles
							<div />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-9">
							<div className="search" id="custom-search-input">
								<div className="input-group col-md-12">
									<input type="text" className="form-control input-lg" placeholder="Buscar" />
									<span className="input-group-btn">
										<button className="btn btn-info " type="button">
											<i className="fas fa-search" />
										</button>
									</span>
								</div>
							</div>
						</div>
						<div className="col-3 text-center">
							<Link to="onlyHotel">
								<button className=" create">+ Crear hotel</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="hotels">
					<div className="list-group">{listhotels}</div>
				</div>
			</div>
			<div />
		</>
	);
};
