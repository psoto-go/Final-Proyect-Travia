import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import "../../styles/home/featured.scss";
export const Featured = props => {
	const [city, setCity] = useState({});

	useEffect(() => {
		fetch(api_url + "/api/city/" + props.city_id)
			.then(response => response.json())
			.then(result => {
				setCity(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	return (
		<div className="inline-div">
			<div className="d-flex justify-content-around hotel-item">
				<Link to={`/hotel/${props.id}`}>
					<div className="landingImg3">
						<img className="card-img border-radius50" src={props.url} alt="Hotel" />
					</div>
					<div>
						<div className="cardFeatured posiFeat"></div>
					</div>
				</Link>
				<div className="ml-2">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{city.name}</p>
				</div>
			</div>
		</div>
	);
};

Featured.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	city_id: PropTypes.number,
	id: PropTypes.number
};
