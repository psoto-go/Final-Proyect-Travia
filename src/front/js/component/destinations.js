import React, { Component, useContext, useState, useEffect } from "react";
import "../../styles/home/featuredHotel.scss";
import { api_url } from "../constants";
import { Featured } from "./featured";

export const Destinations = () => {
	const [detalles, setDetalles] = useState([]);

	useEffect(() => {
		fetch(api_url + "/api/cities")
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	const listCities = detalles.map((item, index) => {
		return (
			<li key={index} className="nav-item" role="presentation">
				<a
					className={index != 0 ? "nav-link" : "nav-link active"}
					id={`pills-${item.id}-tab`}
					data-toggle="pill"
					href={`#pills-${item.id}`}
					role="tab"
					aria-controls={`pills-${item.id}`}
					aria-selected={index != 0 ? "false" : "true"}>
					{item.name}
				</a>
			</li>
		);
	});

	const listCitiesDetails = detalles.map((city, index) => {
		const listHotels = city.hotels.map((hotel, indexa) => {
			return (
				<Featured
					key={indexa}
					name={hotel.name}
					url={hotel.HotelArchives[0] ? hotel.HotelArchives[0].url : ""}
					city_id={city.id}
					id={hotel.id}
				/>
			);
		});

		return (
			<div
				key={index}
				className={index != 0 ? "m-2 tab-pane fade whiteBack " : "  tab-pane fade show active m-2"}
				id={`pills-${city.id}`}
				role="tabpanel"
				aria-labelledby={`pills-${city.id}-tab`}>
				<div className=" display-responsive row">
					<div className="imgRedonda ml-3  m-2 mt-4 justify-content-center col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
						<img src={city.url} alt="..." />
					</div>
					<div className="m-2 col-12 col-sm-7 col-md-7 col-lg-8 col-xl-6 card-body positionText">
						<h5 className="card-title p-3 ml-5 xx-large">{city.name}</h5>
						<p className=" sizeLarge ml-8 x-large">{city.description}</p>
					</div>
				</div>

				<div className="d-flex overflow-horizontal mt-5">{listHotels}</div>
			</div>
		);
	});

	return (
		<div className="mt-5">
			<ul className="nav nav-pills pillsResponsive justify-content-center" id="pills-tab" role="tablist">
				{listCities ? listCities : ""}
			</ul>
			<div className="tab-content " id="pills-tabContent">
				{listCitiesDetails ? listCitiesDetails : ""}
			</div>
		</div>
	);
};
