import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import logo from "../../img/golondrinablanco.png";
import header from "../../img/header.png";

export const NavbarHeader = () => {
	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarScroll">
						<ul
							className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
							style={{ maxheight: "100px" }}>
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Inicio <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Quienes Somos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Que hacemos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Destinos
								</a>
							</li>
						</ul>
						<ul
							className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
							style={{ maxheight: "100px" }}>
							<li className="nav-item active">
								<Link to="/signup">
									<button className="nav-link">Registrarse</button>
								</Link>
							</li>
							<li className="nav-item active">
								<Link to="/login">
									<button className="nav-link">Iniciar Sesion</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

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
