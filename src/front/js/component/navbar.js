import React from "react";
import { Link, Button } from "react-router-dom";
import logo from "../../img/golondrina.png";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<p className="navbar-brand">
					<img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
				</p>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to="/">
								<a className="nav-link" href="#">
									Inicio <span className="sr-only">(current)</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Quienes somos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Que hacemos</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Destinos</a>
						</li>
					</ul>{" "}
					<form className="form-inline my-2 my-lg-0">
						<Link to="/signup">
							<div className="nav-link">Registrarse</div>
						</Link>
						<Link to="/login">
							<button className="btn btn-dark my-2 my-sm-0" type="submit">
								Iniciar sesion
							</button>
						</Link>
					</form>
				</div>
			</nav>
		</>
	);
};
