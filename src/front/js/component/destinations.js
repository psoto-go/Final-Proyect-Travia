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

	const listCitiesDetails = detalles.map((item, index) => {
		return (
			<div
				key={index}
				className={index != 0 ? "tab-pane fade" : "tab-pane fade show active"}
				id={`pills-${item.id}`}
				role="tabpanel"
				aria-labelledby={`pills-${item.id}-tab`}>
				<div className="imgRedonda">
					<img src={item.url} alt="..." />
				</div>
				<div>
					<div className="card-body positionText">
						<h5 className="card-title p-3 ml-5">{item.name}</h5>
						<p className="card-text ml-8">{item.description}</p>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="lugares">
				<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
					{listCities}
				</ul>
			</div>
			<div className="tab-content" id="pills-tabContent">
				{listCitiesDetails}
			</div>
		</div>
	);
};
