import React, { Component, useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Gallery } from "../component/gallery";
import { api_url } from "../constants";

import { NavDetail } from "../component/navDetail";
import { Availability } from "../component/availability";
import { HotelPrices } from "../component/hotelPrices";
import { Reviews } from "../component/reviews";

export const HotelDetail = () => {
	const [hotel, setHotel] = useState({});
	const params = useParams();

	useEffect(() => {
		fetch(api_url + "/api/hotel/" + params.theid)
			.then(response => response.json())
			.then(result => {
				setHotel(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);
	console.log(hotel);

	const listRooms = hotel.rooms
		? hotel.rooms.map((item, index) => {
				return (
					<HotelPrices
						key={index}
						url={item.roomArchives[0].url}
						persons={item.number_of_persons}
						beds={item.number_of_beds}
						price={item.price}
						kind={item.kind}
					/>
				);
		  })
		: "asdf";

	return (
		<>
			<div className="m-5">
				<h2>{hotel.name}</h2>

				<p className="pl-5"> Ipsum Loren Ipsum</p>
				{hotel.HotelArchives ? (
					<Gallery
						urls={hotel.HotelArchives.map(item => {
							return item.url;
						})}
					/>
				) : (
					""
				)}
				<NavDetail description={hotel.description} />

				<Availability />
				{listRooms}
				{/* <HotelPrices></HotelPrices> */}
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
