import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ItemList = props => {
	return (
		<>
			<li className="list-group-item">{props.name}</li>
			<li className="list-group-item">{props.last_name}</li>
			<li className="list-group-item">{props.email}</li>
			<li className="list-group-item">{props.kind}</li>
		</>
	);
};

ItemList.propTypes = {
	name: PropTypes.string,
	last_name: PropTypes.string,
	kind: PropTypes.string,
	email: PropTypes.string
};
