import React from "react";
import "../../styles/hotelDash.scss";
import { Link } from "react-router-dom";
import photoHotel from "../../img/photoHotel.png";

export const HotelDash = () => {
	return (
		<div className="row">
			<div className="col-12 text-center">
				<img className="img-hotel2" src={photoHotel} />
			</div>

			<div className="col-12 text-center">
				<h3 className="">Hoteles</h3>
			</div>
		</div>
	);
	w;
};
