import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Hoteles } from "../component/hoteles";
import { Nosotros } from "../component/nosotros";
import { Destinos } from "../component/destinos";
import { Contacto } from "../component/contacto";
import { Suscribete } from "../component/suscribete";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>TRAVIA</h1>
			<p>Etiam efficitur dictum magna. Maecenas ornare justo at lectus dictum, eget lacinia arcu finibus.</p>

			<Nosotros />
			<Destinos />
			<Hoteles />
			<Contacto />
			<br />
			<Suscribete />
		</div>
	);
};
