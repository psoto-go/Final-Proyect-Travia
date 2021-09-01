import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import { Featured } from "./featured";

export const Destinations = () => {
	const [detalles, setDetalles] = useState([]);

	useEffect(() => {
		fetch(api_url + "/api/cities")
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	const listCities = detalles.map((item, index) => {
		return (
			<li key={index} className="nav-item" role="presentation">
				<a
					className={index != 0 ? "nav-link" : "nav-link active"}
					id={`pills-${item.id}-tab`}
					data-toggle="pill"
					href={`#pills-${item.id}`}
					role="tab"
					aria-controls={`pills-${item.id}`}
					aria-selected={index != 0 ? "false" : "true"}>
					{item.name}
				</a>
			</li>
		);
	});

	const listCitiesDetails = detalles.map((city, index) => {
		const listHotels = city.hotels.map((hotel, indexa) => {
			return (
				<Featured
					key={indexa}
					name={hotel.name}
					url={hotel.HotelArchives[0].url}
					city_id={city.id}
					id={hotel.id}
				/>
			);
		});

		return (
			<div
				key={index}
				className={index != 0 ? "m-2 tab-pane fade " : "  tab-pane fade show active m-2"}
				id={`pills-${city.id}`}
				role="tabpanel"
				aria-labelledby={`pills-${city.id}-tab`}>
				<div className="imgRedonda col-4 m-2">
					<img src={city.url} alt="..." />
				</div>
				<div className="m-2 col-4 card-body positionText">
					<h5 className="card-title p-3 ml-5">{city.name}</h5>
					<p className="card-text ml-8">{city.description}</p>
				</div>
				<div align="left">{listHotels}</div>
			</div>
		);
	});

	return (
		<div className="mt-5 pl-5  ml-5">
			<ul className="nav nav-pills " id="pills-tab" role="tablist">
				{listCities}
			</ul>
			<div className="tab-content " id="pills-tabContent">
				{listCitiesDetails}
			</div>
		</div>
	);
};
