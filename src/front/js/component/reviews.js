import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";

export const Reviews = props => {
	return (
		<div className="card">
			<div className="card-header">{props.user_id}</div>
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
