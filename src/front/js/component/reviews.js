import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";

export const Reviews = props => {
	const [detalles, setDetalles] = useState([]);
	useEffect(() => {
		fetch(api_url + "/api/user/" + props.user_id)
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);
	return (
		<div className="card reviewsCardHome ">
			<div className="card-header">{detalles.name}</div>
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<p>{props.description}</p>
				</blockquote>
			</div>
		</div>
	);
};
Reviews.propTypes = {
	user_id: PropTypes.number,
	description: PropTypes.string
};
