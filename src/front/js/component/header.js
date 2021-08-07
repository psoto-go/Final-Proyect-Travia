import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import logo from "../../img/golondrinablanco.png";
import header from "../../img/header.png";

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col">Lorem ipsum dolor sit amet</div>
					<div className="col">
						<img src={header} width="629px" height="493.08px" />
					</div>
				</div>
			</div>
		</header>
	);
};
