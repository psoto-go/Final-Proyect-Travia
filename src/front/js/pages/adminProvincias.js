import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import "../../styles/admDash.scss";
import "../../styles/provincias.scss";
import { Provincias } from "../component/provincias";

export const AdminProvincias = () => {
	const [city, setCity] = useState([]);

	useEffect(() => {
		fetch(api_url + "/api/cities")
			.then(response => response.json())
			.then(result => {
				setCity(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	const listCities = city.map((item, index) => {
		return <Provincias url={item.url} name={item.name} key={index}></Provincias>;
	});
	return (
		<>
			<div>
				<div className="container text-center">
					<div className="row">
						<div className="col-md-4">
							<h1>Ciudades</h1>
						</div>
						<div className="col-md-4 ml-auto">
							<Link to="#">Dashboard</Link> / Ciudades
							<div className="col" />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-10">
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
						<div className="col-2">
							<button className=" create">+ Crear ciudad</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container3">
				<div className="row">{listCities}</div>
			</div>
		</>
	);
};
