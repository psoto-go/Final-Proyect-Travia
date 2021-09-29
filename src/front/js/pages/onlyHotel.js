import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/addImgHotel.scss";
import "../../styles/onlyRoom.scss";
import { AddHotelDesc } from "../component/addHotelDesc";
import { CarrouselHotel } from "../component/addImgHotel";

import { ReviewRoom } from "../component/reviewRoom";
import { TypeRoom } from "../component/typeRoom";

export const OnlyHotel = () => {
	return (
		<div className="onlyRoom">
			<CarrouselHotel />
			<AddHotelDesc />

			<TypeRoom />

			<ReviewRoom />
		</div>
	);
};
