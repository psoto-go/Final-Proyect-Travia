import React, { Component } from "react";

import { Gallery } from "../component/gallery";

import { NavDetail } from "../component/navDetail";
import { Availability } from "../component/availability";
import { HotelPrices } from "../component/hotelPrices";
import { Reviews } from "../component/reviews";

export const HotelDetail = () => {
	return (
		<>
			<div className="m-5">
				<h2>Loren Ipsum dolor sit amet</h2>

				<p className="pl-5"> Ipsum Loren Ipsum</p>

				<Gallery />
				<NavDetail />

				<Availability />
				<HotelPrices />
				<HotelPrices />
				<HotelPrices />
			</div>
			<div className="resenasDetail">
				<Reviews />
			</div>
			<div>
				<p className="ml-5">
					<h3 className="mt-5">Politicas de Reserva</h3>
					Ut tempus lobortis urna eu mattis. Donec semper ultricies ultricies. Suspendisse porttitor metus
					turpis, sed dictum turpis aliquam non. Phasellus eu porta sem. Vivamus cursus libero rhoncus,
					vehicula tortor ac, lacinia nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia curae; Donec placerat erat vel purus dignissim tempor.
				</p>
			</div>
		</>
	);
};
