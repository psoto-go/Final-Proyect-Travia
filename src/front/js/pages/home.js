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
		return <Featured key={index} name={hotel.name} url={hotel.HotelArchives[0].url} city_id={hotel.city_id} />;
	});

	const listReviews = reviews.map((review, index) => {
		return <Reviews key={index} user_id={review.user_id} description={review.description} />;
	});

	return (
		<div>
			<Header />
			<Search />
			<h3 className="pepito mx-auto">Destacados</h3>
			{listHotels}
			<Destinations />
			<div className="resenasStyle">
				<h2 className="p-5">Nuestros usuarios opinan</h2>
				<div className="row">{listReviews}</div>
			</div>
			<Subscribe />
		</div>
	);
};
