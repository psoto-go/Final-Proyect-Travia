import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Nosotros } from "../component/nosotros";
import { Destinos } from "../component/destinos";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>TRAVIA</h1>

			<p>Etiam efficitur dictum magna. Maecenas ornare justo at lectus dictum, eget lacinia arcu finibus.</p>
			<Nosotros />
			<Destinos />
		</div>
	);
};
