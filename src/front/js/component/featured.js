import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import "../../styles/home.scss";
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
			<div className="hotel-item">
				<div>
					<div>
						<img className="card-img elementStyle" src={props.url} alt="Jacuzzi" />
					</div>
					<div>
						<div className="card-body posiFeat">
							<a href="#" className="btn btn-primary">
								More
							</a>
						</div>
					</div>
				</div>
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{city.name}</p>
			</div>
		</div>
	);
};

Featured.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	city_id: PropTypes.number
};
