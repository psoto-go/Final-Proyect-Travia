import React from "react";

import "../../styles/homeBackground/homeBackground.scss";
import header2 from "../../img/header2.png";
import header from "../../img/header.png";

export const Header = () => {
	return (
		<div className="header">
			<div className="contenedor ">
				<h1 className="coloredh1">Travia.</h1>
				<h3 className="coloredh3">Es distinto, es Travia.</h3>
			</div>
			<div id="landingImg">
				<img src={header} />
			</div>
			<div id="landingImg2">
				<img src={header2} />
			</div>
		</div>
	);
};
