import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Header } from "../component/header";
import { Reviews } from "../component/reviews";
import { Destinations } from "../component/destinations";
import { Featured } from "../component/featured";
import { Subscribe } from "../component/subscribe";
import { api_url } from "../constants";
import { Search } from "../component/search";
import { SearchResponsive } from "../component/searchResponsive";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDaq_DXg5Oe1n6XQFUFMQu8EusN8NOXhZY`;
	const [hotels, setHotels] = useState([]);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(api_url + "/api/featuredhotels")
			.then(response => response.json())
			.then(result => {
				setHotels(result.response);
			})
			.catch(error => console.log("Error", error));

		fetch(api_url + "/api/featuredreviews")
			.then(response => response.json())
			.then(result => {
				setReviews(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	const listHotels = hotels.map((hotel, index) => {
		return (
			<Featured
				key={index}
				name={hotel.name}
				url={hotel.HotelArchives[0].url}
				city_id={hotel.city_id}
				id={hotel.id}
			/>
		);
	});

	const listReviews = reviews.map((review, index) => {
		return <Reviews key={index} user_id={review.user_id} description={review.description} />;
	});

	return (
		<div>
			<div className="header m-0 p-0 pt-5 pb-3">
				<Header />
				<Search />
				<SearchResponsive />
			</div>
			<div className="m-5">
				<h3 className="offset-1 col-11 mb-3">Destacados</h3>
				<div className="d-flex  overflow-horizontal">{listHotels}</div>
			</div>
			<div className="whiteBack">
				<Destinations />
			</div>
			<div className="headerInverse">
				<h2 className="offset-1 pt-3">Nuestros usuarios opinan</h2>{" "}
				<div className="reviewsHome pb-2 m-4">{listReviews}</div>
			</div>

			<Subscribe />
		</div>
	);
};
