import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import logo from "../../img/golondrinablanco.png";
import header from "../../img/header.png";
import { Search } from "./search";
export const Header = () => {
	return (
		<div className="header">
			<div className="contenedor">
				<h1>Lorem ipsum dolor sit amet</h1>
				<h3>Lorem ipsum dolor sit amet</h3>
			</div>
			<div id="landingImg">
				<img src={header} />
			</div>

			<Search />
		</div>
	);
};
