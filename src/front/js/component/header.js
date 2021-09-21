import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homeBackground/homeBackground.scss";
import logo from "../../img/golondrinablanco.png";
import header from "../../img/header.png";
import { Search } from "./search";
export const Header = () => {
	return (
		<div className="header">
			<div className="contenedor">
				<h1 className="coloredh1">Travia.</h1>
				<h3>Es distinto, es Travia.</h3>
			</div>
			<div id="landingImg">
				<img src={header} />
			</div>
		</div>
	);
};
