import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img
						src="src/front/img/golondrinablanco.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="Logo"
					/>
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
					<ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxheight: "100px" }}>
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
					<div className="d-flex">
						<button className="btn btn-outline-success" type="submit">
							Registrarse
						</button>
						<button className="btn btn-outline-success" type="submit">
							Iniciar Sesion
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
