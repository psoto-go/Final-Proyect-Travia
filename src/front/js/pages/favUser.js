import React from "react";
import { FavComp } from "../component/favComp";

export const FavUser = () => {
	return (
		<div>
			<h1>Lorem Impsum</h1>
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
