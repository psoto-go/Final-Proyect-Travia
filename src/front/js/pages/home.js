import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

import { Header } from "../component/header";

import { Reviews } from "../component/reviews";
import { Destinations } from "../component/destinations";
import { Featured } from "../component/featured";
import { Subscribe } from "../component/subscribe";
import { api_url } from "../constants";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDaq_DXg5Oe1n6XQFUFMQu8EusN8NOXhZY`;
	const [detalles, setDetalles] = useState();

	useEffect(() => {
		fetch(api_url + "/api/featuredhotels")
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	return (
		<>
			<Header />
			<h3 className="pepito mx-auto">Destacados</h3>
			{detalles
				? detalles.map((item, index) => {
						return (
							<Featured
								key={index}
								name={detalles[index].name}
								url={detalles[index].HotelArchives[0].url}
								description={detalles[index].description}
							/>
						);
				  })
				: "Cargando Hoteles..."}
			<Destinations />
			<Reviews />
			<Subscribe />
		</>
	);
};
