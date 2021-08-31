import React from "react";
import { FavComp } from "../component/favComp";

export const FavUser = () => {
	return (
		<div className="container">
			<div className="row">
				<h1 className="ml-4">Favoritos/ Guardados</h1>
			</div>

			<div className="row">
				<FavComp />

				<FavComp />

				<FavComp />
			</div>
			<div className="row">
				<FavComp />

				<FavComp />

				<FavComp />
			</div>
		</div>
	);
};
