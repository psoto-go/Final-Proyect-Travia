import React from "react";
import { FavComp } from "../component/favComp";

export const FavUser = () => {
	return (
		<div className="row">
			<div className="col-3">
				<FavComp />
			</div>
			<div className="col-3">
				<FavComp />
			</div>
			<div className="col-3">
				<FavComp />
			</div>
			<div className="col-3">
				<FavComp />
			</div>
		</div>
	);
};
