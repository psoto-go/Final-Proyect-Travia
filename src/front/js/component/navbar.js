import React, { Component, useContext, useState, useEffect } from "react";
import jwt from "jwt-decode"; // import dependency
import { useLocation } from "react-router-dom";
import { Link, Button } from "react-router-dom";
import logo from "../../img/golondrinablanco.png";

export const Navbar = () => {
	const [logged, setLogged] = useState(false);
	let location = useLocation();
	useEffect(() => {
		let token = localStorage.getItem("token");
		if (token) {
			if (jwt(token).sub.kind == "admin" || jwt(token).sub.kind == "user") {
				setLogged(true);
			} else {
				setLogged(false);
			}
		} else {
			setLogged(false);
		}
	}, [location.pathname]);
	return (
		<nav className="navbar navbar-expand-lg navbar-light palNav colored">
			<p className="navbar-brand">
				<Link to="/">
					<img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
				</Link>
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

			<div className="collapse navbar-collapse colored" id="navbarSupportedContent colored ">
				<ul className="navbar-nav mr-auto colored">
					<li className="nav-item active colored">
						<Link to="/" className="btn btn-dark my-2 my-sm-0 colored">
							Inicio
						</Link>
					</li>
					<li className="nav-item colored">
						<a className="nav-link colored" href="#">
							Quienes somos
						</a>
					</li>
					<li className="nav-item colored">
						<a className="nav-link colored" href="#">
							Que hacemos
						</a>
					</li>
					<li className="nav-item colored">
						<a className="nav-link colored" href="#">
							Destinos
						</a>
					</li>
				</ul>{" "}
				{!logged ? (
					<div className="form-inline my-2 my-lg-0 colored">
						<Link to="/signup" className="nav-link colored">
							Registrarse
						</Link>
						<Link to="/login" className="nav-link colored">
							Iniciar
						</Link>
					</div>
				) : (
					<div className="form-inline my-2 my-lg-0 colored">
						<Link to="/myAccount" className="nav-link colored">
							Mi perfil
						</Link>
						<Link
							to="/login"
							className="nav-link colored"
							onClick={() => {
								localStorage.removeItem("token");
							}}>
							Salir
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
