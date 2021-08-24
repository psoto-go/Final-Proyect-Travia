import React, { Component, useContext, useState, useEffect } from "react";
import { HotelServices } from "../component/hotelServices";
import "../../styles/index.scss";
import PropTypes from "prop-types";
import { api_url } from "../constants";

export const Availability = props => {
	return (
		<div>
			<h3>Disponibilidad</h3>
			<div className="p-3 mb-4 mt-4 bg-light text-dark rounded-pill ajustDate">
				<div className="textMargin">Entrada</div>
				<input type="date" />
				<div className="textMargin">Salida</div>
				<input type="date" />
				<i className="fas fa-user-friends textMargin" />
				<input type="number" min="1" max="5" placeholder="0" />
			</div>
		</div>
	);
};
