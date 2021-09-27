import React, { Component, useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Gallery } from "../component/gallery";
import { api_url } from "../constants";
import { NavDetail } from "../component/navDetail";
import { Availability } from "../component/availability";
import { HotelPrices } from "../component/hotelPrices";
import { Reviews } from "../component/reviews";
import { HotelServices } from "../component/hotelServices";

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
						item={item}
					/>
				);
		  })
		: "asdf";

	const listGallery = hotel.HotelArchives ? (
		<Gallery
			urls={hotel.HotelArchives.map(item => {
				return item.url;
			})}
		/>
	) : (
		""
	);

	const listServices = hotel.services
		? hotel.services.map((item, index) => {
				return <HotelServices key={index} service={item.name} />;
		  })
		: "asdf";

	const listReviews = hotel.reviews
		? hotel.reviews.map((item, index) => {
				return <Reviews key={index} user_id={item.id} description={item.description} />;
		  })
		: "asdf";

	console.log(hotel);

	return (
		<>
			<div className="m-5">
				<h2>{hotel.name}</h2>

				{/* <p className="pl-5"> Ipsum Loren Ipsum Ipsum Loren Ipsum Ipsum Loren Ipsum</p> */}

				{listGallery}

				<div className="row">
					<div className="col-12">
						<NavDetail description={hotel.description} />
						<div className="serviciosHotel col-6">
							<h3>Servicios del Hotel</h3>
							{listServices}
						</div>
						<div className="col ">
							<Availability />
						</div>
					</div>
				</div>

				{listRooms}
			</div>
			<div className="resenasStyle">
				<h2 className="p-5">Nuestros usuarios opinan</h2>
				<div className="row">{listReviews}</div>
			</div>

			<div className="ml-5">
				<p>
					<h3 className="pl-1">Politicas de Reserva</h3>
					Ut tempus lobortis urna eu mattis. Donec semper ultricies ultricies. Suspendisse porttitor metus
					turpis, sed dictum turpis aliquam non. Phasellus eu porta sem. Vivamus cursus libero rhoncus,
					vehicula tortor ac, lacinia nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia curae; Donec placerat erat vel purus dignissim tempor.
				</p>
			</div>
		</>
	);
};
