import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";

export const HotelServices = props => {
	return (
		<>
			<button type="button" className="btn btn-light bg-info text-white">
				{props.service}
			</button>
		</>
	);
};

HotelServices.propTypes = {
	service: PropTypes.string
};
