import React from "react";
import PropTypes from "prop-types";
import "../../styles/provincias.scss";
import { Link } from "react-router-dom";

export const Provincias = props => {
	return (
		<div className="prov col-3">
			<img src={props.url} alt="" />
			<div>
				<Link to="#">
					<h3 className="text-center">{props.name}</h3>
				</Link>
			</div>
		</div>
	);
};

Provincias.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string
};
