import React from "react";
import { Link } from "react-router-dom";
import "../../styles/addImgHotel.scss";
import "../../styles/onlyRoom.scss";
import { AddHotelDesc } from "../component/addHotelDesc";
import { CarrouselHotel } from "../component/addImgHotel";
import { NavBarRoom } from "../component/navBarRoom";
import { TypeRoom } from "../component/typeRoom";

export const OnlyHotel = () => {
	return (
		<>
			<div className="onlyRoom">
				<CarrouselHotel />
				<AddHotelDesc />

				<TypeRoom />
			</div>
		</>
	);
};
