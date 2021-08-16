import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/cards.scss";
import { Header } from "../component/header";
import { Map } from "../component/map";
import { Countries } from "../component/Countries";
import { Carrousel } from "../component/carrousel";
import { Resenas } from "../component/resenas";
import { Destinos } from "../component/destinos";
import { Destacados } from "../component/destacados";
import { Suscribete } from "../component/suscribete";

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
