import React from "react";

import "../../styles/home/homeBackground.scss";

import header from "../../img/header.png";

export const Header = () => {
	return (
<<<<<<< HEAD
		<div className="header">
			<div className="ml-3 mr-3 justify-content-center">
				<h1 className="coloredh1 ml-5 pt-5">Lorem ipsum dolor sit amet</h1>
				<h3 className=" ml-5 d-none d-lg-block d-xl-block">Lorem ipsum dolor </h3>
			</div>
			<div id="landingImg">
				<img src={header} className="d-none d-lg-block d-xl-block" />
=======
		<div className="header row mr-0 ml-0">
			<div className="contenedor col-4 col-sm-6 col-md-6 col-lg-6 col-xl-4">
				{/* <div className="center"> */}
				<h1 className="coloredh1 ">TRAVIA</h1>
				<h3 className="coloredh3 ">Es distinto, es Travia.</h3>
				{/* </div> */}
			</div>
			<div id="landingImg col col-sm col-md col-lg col-xl">
				<img src={header} className="dimensionImg" />
>>>>>>> origin
			</div>
		</div>
	);
};
