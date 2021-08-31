import React from "react";
import { FavComp } from "../component/favComp";

export const FavUser = () => {
	return (
		<div>
			<h3>Lorem Impsum</h3>
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
