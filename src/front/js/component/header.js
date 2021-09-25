import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homeBackground/homeBackground.scss";
import logo from "../../img/golondrinablanco.png";
import header from "../../img/header.png";
import { Search } from "./search";
export const Header = () => {
	return (
		<div className="header">
			<div className="ml-3 mr-3 justify-content-center">
				<h1 className="coloredh1 ml-5 pt-5">Lorem ipsum dolor sit amet</h1>
				<h3 className=" ml-5 d-none d-lg-block d-xl-block">Lorem ipsum dolor </h3>
			</div>
			<div id="landingImg">
				<img src={header} className="d-none d-lg-block d-xl-block" />
			</div>
		</div>
	);
};
