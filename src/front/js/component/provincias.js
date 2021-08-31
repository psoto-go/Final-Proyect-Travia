import React from "react";
import PropTypes from "prop-types";
import "../../styles/provincias.scss";
import { Link } from "react-router-dom";

export const Provincias = props => {
	return (
		<div className="row">
			<div className="prov col-3">
				<img src={props.url} alt="" />
				<div>
					<Link to="#">
						<h1>{props.name}</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};

Provincias.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string
};
