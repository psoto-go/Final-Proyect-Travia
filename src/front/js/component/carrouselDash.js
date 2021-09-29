import React from "react";
import "../../styles/carrouselDash.scss";
import { Link } from "react-router-dom";
import citiesPhoto from "../../img/citiesPhoto.png";

export const CarrouselDash = () => {
	return (
		<div className="row">
			<div className="col-12 text-center">
				<img className="img-hotel" src={citiesPhoto} />
			</div>

			<div className="col-12 text-center">
				<h3 className="textDash">Ciudades</h3>
			</div>
		</div>
	);
};
