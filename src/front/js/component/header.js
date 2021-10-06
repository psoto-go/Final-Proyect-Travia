import React from "react";

import "../../styles/home/homeBackground.scss";

import header from "../../img/header.png";

export const Header = () => {
	return (
		<div className="row m-0 alignCenter">
			<div className="col-6 m-0 text-center">
				{/* <div className="center"> */}
				<h1 className="coloredh1">TRAVIA</h1>
				<h3 className="coloredh3">Es distinto, es Travia</h3>
				{/* </div> */}
			</div>
			<div className="col-6 m-0">
				<img src={header} className="img-fluid col-sm-9 m-0 pb-2" />
			</div>
		</div>
	);
};
