import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/cards.scss";
import { Header } from "../component/header";
import { Cities } from "../component/cities";
import { Countries } from "../component/cardCountry";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Header />
			<Countries />
			<Cities />
		</>
	);
};
