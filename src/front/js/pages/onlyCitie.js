import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/addImgHotel.scss";
import "../../styles/onlyRoom.scss";
import { AddProvDesc } from "../component/addProvDesc";
import { CarrouselProv } from "../component/addImgProv";

import { ReviewRoom } from "../component/reviewRoom";
import { TypeRoom } from "../component/typeRoom";

export const OnlyCitie = () => {
	return (
		<div className="onlyRoom">
			<CarrouselProv />
			<AddProvDesc />
		</div>
	);
};
