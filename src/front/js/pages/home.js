import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/cards.scss";
import { Header } from "../component/header";
import { Carrousel } from "../component/carrousel";
import { Resenas } from "../component/resenas";
import { Destinos } from "../component/destinos";
import { Destacados } from "../component/destacados";
import { Suscribete } from "../component/suscribete";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Header />
			<h3 className="mx-auto">Destacados</h3>
			<Destacados />
			<Destinos />
			<Resenas />
			<Suscribete />
		</>
	);
};
