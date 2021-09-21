import React, { Component, useContext, useState, useEffect } from "react";
import jwt from "jwt-decode"; // import dependency
import { useLocation } from "react-router-dom";
import { Link, Button } from "react-router-dom";
import logo from "../../img/golondrinablanco.png";
import "../../styles/styleNav/styleNav.scss";

export const Navbar = () => {
	const [options, setOptions] = useState(false);
	const [logged, setLogged] = useState(false);
	let location = useLocation();
	useEffect(() => {
		let token = localStorage.getItem("token");
		if (token) {
			if (jwt(token)) {
				setLogged(true);
			} else {
				setLogged(false);
			}
		} else {
			setLogged(false);
		}
	}, [location.pathname]);
	return (
		<nav className="navbar navbar-expand-lg palNav">
			<img src={logo} alt="Logo" className="ml-5" />
			{options ? (
				<ul className="navbar-nav navbar-home  mr-auto ">
					<li className="nav-item active">
						<Link to="/" className="btn btn-dark my-2 my-sm-0 ">
							Inicio
						</Link>
					</li>
					<li className="nav-item">
						<a href="#">Quienes somos</a>
					</li>
					<li className="nav-item">
						<a href="#">Que hacemos</a>
					</li>
					<li className="nav-item">
						<a href="#">Destinos</a>
					</li>
					<hr />
					{!logged ? (
						<div className="my-2 my-lg-0 ">
							<li>
								<a href="/Signup">Registrarse</a>
							</li>
							<li>
								<a href="/login">Iniciar</a>
							</li>
						</div>
					) : (
						<div className="form-inline my-2 my-lg-0 ">
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
				</ul>
			) : (
				" "
			)}
			<div className=" mr-auto ml-4 navbarDropdown form-inline">
				<div className="nav-item active">
					<Link to="/" className="btn btn-dark my-2 my-sm-0 ">
						Inicio
					</Link>
				</div>
				<div className="nav-item ">
					<a href="#" className="colored">
						Quienes somos
					</a>
				</div>
				<div className="nav-item ">
					<a href="#" className="colored">
						Que hacemos
					</a>
				</div>
				<div className="nav-item ">
					<a href="#" className="colored">
						Destinos
					</a>
				</div>
			</div>
			{!logged ? (
				<div className="navbarDropdown form-inline my-2 pr-5 ">
					<Link to="/signup" className="nav-link colored">
						Registrarse
					</Link>
					<Link to="/login" className="nav-link colored">
						Iniciar
					</Link>
				</div>
			) : (
				<div className="form-inline my-2 my-lg-0 ">
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
			<i
				className={!options ? "fas fa-bars text-white" : "fas fa-times text-white"}
				onClick={() => setOptions(!options)}
				id="navbar-dropmenu"></i>
		</nav>
	);
};
