import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";

export const FeaturedHotelsCities = props => {
	return (
		<>
			<div className="inline-div">
				<div className="hotel-item">
					<div>
						<div className="col-sm-5">
							<img
								style={{ width: "300px", borderRadius: "50px" }}
								className="card-img"
								src={props.url}
								alt="Jacuzzi"
							/>
						</div>
						<div className="col-sm-7">
							<div className="card-body posiFeat">
								<a href="#" className="btn btn-primary">
									More
								</a>
							</div>
						</div>
					</div>
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
		</>
	);
};
FeaturedHotelsCities.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string
};
