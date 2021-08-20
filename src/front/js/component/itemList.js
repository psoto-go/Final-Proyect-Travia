import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ItemList = props => {
	return (
		<>
			<tr>
				<td>{props.name}</td>
				<td>{props.last_name}</td>
				<td>{props.email}</td>
				<td>{props.kind}</td>
				<td>{props.date}</td>
			</tr>
		</>
	);
};

ItemList.propTypes = {
	name: PropTypes.string,
	last_name: PropTypes.string,
	kind: PropTypes.string,
	email: PropTypes.string,
	date: PropTypes.string
};
