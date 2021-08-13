import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
export const Search = () => {
	return (
		<div id="searchBar">
			<div className="bgcolor-searchBar">
				<i className="fas fa-map-marker-alt textMargin" />
				<input type="text" id="text" placeholder="¿A Donde Quieres Viajar?" />
				<div className="textMargin">Check-In</div>
				<input type="date" id="date" />
				<div className="textMargin">Check-Out</div>
				<input type="date" id="date" />
				<i className="fas fa-user-friends textMargin" />
				<input type="number" min="1" max="5" placeholder="0" />
				<Link to={"/list"} type="button" className="btn btn-warning">
					<div>Buscar</div>
				</Link>
			</div>
		</div>
	);
};
