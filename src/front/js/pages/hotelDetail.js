import React, { Component } from "react";

import { Gallery } from "../component/gallery";
import { HotelServices } from "../component/hotelServices";
import { NavDetail } from "../component/navDetail";
import { Availability } from "../component/availability";
import { HotelPrices } from "../component/hotelPrices";
import { Reviews } from "../component/reviews";

export const HotelDetail = () => {
	return (
		<>
			<div>
				<h2>Loren Ipsum dolor sit amet</h2>
			</div>
			<a className="pl-5">Loren Ipsum Loren Ipsum</a>
			<Gallery />
			<NavDetail />
			<hr />
			<h3>Descripcion</h3>
			<p>
				Ut tempus lobortis urna eu mattis. Donec semper ultricies ultricies. Suspendisse porttitor metus turpis,
				sed dictum turpis aliquam non. Phasellus eu porta sem. Vivamus cursus libero rhoncus, vehicula tortor
				ac, lacinia nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
				curae; Donec placerat erat vel purus dignissim tempor.
			</p>

			<HotelServices />
			<Availability />
			<HotelPrices />
			<div className="resenasDetail">
				<Reviews />
			</div>
			<h3>Politicas de Reserva</h3>
			<p>
				Ut tempus lobortis urna eu mattis. Donec semper ultricies ultricies. Suspendisse porttitor metus turpis,
				sed dictum turpis aliquam non. Phasellus eu porta sem. Vivamus cursus libero rhoncus, vehicula tortor
				ac, lacinia nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
				curae; Donec placerat erat vel purus dignissim tempor.
			</p>
		</>
	);
};
