import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

import { Header } from "../component/header";

import { Reviews } from "../component/reviews";
import { Destinations } from "../component/destinations";
import { Featured } from "../component/featured";
import { Subscribe } from "../component/subscribe";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDaq_DXg5Oe1n6XQFUFMQu8EusN8NOXhZY`;
	return (
		<>
			<Header />
			<h3 className="pepito mx-auto">Destacados</h3>
			<Destacados />
			<Destinos />
			<Resenas />
			<Suscribete />

		</>
	);
};
