import React from "react";

import "../../styles/home/homeBackground.scss";

import header from "../../img/header.png";

export const Header = () => {
	return (
		<div className="header row mr-0 ml-0">
			<div className="contenedor col-4 col-sm-6 col-md-6 col-lg-6 col-xl-4">
				{/* <div className="center"> */}
				<h1 className="coloredh1 ">TRAVIA</h1>
				<h3 className="coloredh3 ">Es distinto, es Travia.</h3>
				{/* </div> */}
			</div>
			<div id="landingImg col col-sm col-md col-lg col-xl">
				<img src={header} className="dimensionImg" />
			</div>
		</div>
	);
};
