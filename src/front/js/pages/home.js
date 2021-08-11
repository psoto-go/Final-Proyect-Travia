import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/cards.scss";
import { Header } from "../component/header";
import { Map } from "../component/map";

import { Countries } from "../component/cardCountry";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBOftjuA_Gb7vY8PSv8ExXEIW_CDCvRYMU`;
	return (
		<>
			<div style={{ height: "500px", width: "500px" }}>
				<Map />
			</div>

			{<Header />}

			<Countries />
		</>
	);
};
