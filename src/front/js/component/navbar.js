import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import jwt from "jwt-decode"; // import dependency
import { useLocation } from "react-router-dom";
import { Link, Button } from "react-router-dom";
import logo from "../../img/golondrinablanco.png";
import "../../styles/home/styleNav.scss";
import GoogleLogin from "react-google-login";
import logo2 from "../../img/golondrina.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	const [registerValue, setRegisterValue] = useState(firstRegisterValue);
	const [confirmValue, setConfirmValue] = useState();
	let history = useHistory();

	useEffect(() => {
		selectKind();
	}, []);
	const selectKind = () => {
		console.log("##");
		const token = localStorage.getItem("token");
		if (token) {
			console.log(jwt(token).sub.kind);
			if (jwt(token).sub.kind == "user") {
				history.push("/myAccount");
			} else if (jwt(token).sub.kind == "admin") {
				history.push("/adminDash");
			}
		}
	};
	const firstValue = {
		email: "",
		password: ""
	};
	const firstRegisterValue = {
		name: "",
		last_name: "",
		email: "",
		password: ""
	};
	const changeInputRegister = e => {
		setRegisterValue({ ...registerValue, [e.target.name]: e.target.value });
	};
	const changeInputConfirm = e => {
		setConfirmValue(e.target.value);
	};
	const submitFormRegister = e => {
		e.preventDefault();
		if (registerValue.password === confirmValue) {
			actions.register(registerValue);
			history.push("/welcome");
		} else {
			console.log("error");
		}
	};
	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};
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

	const submitForm = async e => {
		e.preventDefault();

		let login = await actions.signin_user(loginValue);
		console.log(login);
		if (login) {
			selectKind();
		}
		// actions.loadUsers();
	};
	const respuestaGoogle = async respuesta => {
		console.log(respuesta, "@@@@@@@@@@@@@@");
		if (!respuesta.error) {
			if ((await actions.signin_google(respuesta)) && (await actions.register_google(respuesta))) {
				console.log("#");
				history.push("/myAccount");
			}
		}
	};
	// const changeInput = e => {
	// 	setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	// };
	return (
		<nav className="navbar navbar-expand-lg palNav">
			<img src={logo} alt="Logo" />
			{options ? (
				<ul className="navbar-nav navbar-home navbarDanger mr-auto ">
					<li className="nav-item ">
						<a href="/" className="colored padding-left">
							Inicio
						</a>
					</li>
					<li className="nav-item ">
						<a href="#" className="padding-left">
							Quienes somos
						</a>
					</li>
					<li className="nav-item">
						<a href="/quehacemos" className="padding-left">
							Que hacemos
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="padding-left">
							Destinos
						</a>
					</li>
					<hr />
					{!logged ? (
						<div className="my-2 my-lg-0">
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
			<ul className=" mr-auto navbarDropdownv2 form-inline">
				<li className="nav-item">
					<a href="/" className="colored">
						Inicio
					</a>
				</li>
				<li className="nav-item p-2">
					<a href="#" className="colored">
						Destinos
					</a>
				</li>
				<li className="nav-item p-2">
					<a href="#" className="colored">
						Quienes somos
					</a>
				</li>
				<li className="nav-item p-2">
					<a href="/quehacemos" className="colored">
						Que hacemos
					</a>
				</li>
			</ul>
			{!logged ? (
				<div className="navbarDropdown form-inline my-2 pr-5 ">
					<button
						type="button"
						className="btn btn-info mb-0 btn-md mr-1"
						data-toggle="modal"
						data-target="#exampleModal2">
						Registrarse
					</button>
					<div
						className="modal fade "
						id="exampleModal2"
						tabIndex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true">
						<div className="modal-dialog modal-lg modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">
										<div className="container px-lg-5 ">
											<div className=" row ">
												<div className="col-2 py-3 px-lg-5 ">
													<img
														className="float-left"
														src={logo2}
														alt=""
														width="72"
														height="72"
													/>
												</div>
												<div className="col py-3 px-lg-5">
													<h3 className="text-right display-4">Inicia sesi??n</h3>
												</div>
											</div>
										</div>
									</h5>
									<button
										type="button btn-lg"
										className="close btn-lg"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<form className="form-signin">
										<div className="form-row ">
											<div className="col justify-content-start">
												<label
													htmlFor="inputEmail"
													className="form-label text-dark font-weight-bold">
													Nombre
												</label>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control"
													id="exampleFormControlInput1"
													placeholder="Nombre"
													name="name"
													onChange={changeInputRegister}
												/>
											</div>
										</div>
										<div className="w-100"></div>
										<div className="form-row">
											<div className="col">
												<label
													htmlFor="inputPassword"
													className="form-label text-dark font-weight-bold">
													Apellido
												</label>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control"
													id="exampleFormControlInput"
													placeholder="Apellido"
													name="last_name"
													onChange={changeInputRegister}
												/>
											</div>
										</div>
										<div className="form-row ">
											<div className="col justify-content-start">
												<label
													htmlFor="inputEmail"
													className="form-label text-dark font-weight-bold">
													Email
												</label>
											</div>
											<div className="col">
												<input
													type="email"
													className="form-control"
													id="exampleFormControlInput12"
													placeholder="Email"
													name="email"
													onChange={changeInputRegister}
												/>
											</div>
										</div>
										<div className="form-row ">
											<div className="col justify-content-start">
												<label
													htmlFor="inputEmail"
													className="form-label text-dark font-weight-bold">
													Contrase??a
												</label>
											</div>
											<div className="col">
												<input
													type="password"
													className="form-control"
													id="inputPassword1"
													placeholder="Password"
													name="password"
													onChange={changeInputRegister}
												/>
											</div>
										</div>
										<div className="form-row ">
											<div className="col justify-content-start">
												<label
													htmlFor="inputEmail"
													className="form-label text-dark font-weight-bold">
													Repetir contrase??a
												</label>
											</div>
											<div className="col">
												<input
													type="password"
													className="form-control"
													id="inputPassword2"
													placeholder="Password"
													name="password2"
													onChange={changeInputConfirm}
												/>
											</div>
										</div>
										<div className="justify-content-center ml-4">
											<button
												type="button"
												className="btn btn-lg btn-warning btn-block"
												onClick={submitFormRegister}
												data-dismiss="modal">
												Registrarse
											</button>
										</div>
										<hr className="hr-text" data-content="o usar una de estas opciones" />

										<div className="d-flex justify-content-center">
											<div className="justify-content-center mr-5">
												<GoogleLogin
													clientId="946040142718-3h25n3eak29rip9ftt5ko3sme27l8ob4.apps.googleusercontent.com"
													onSuccess={respuestaGoogle}
													onFailure={respuestaGoogle}
													cookiePolicy={"single_host_origin"}
												/>
											</div>
										</div>

										<p className="text-center mt-5 mb-3 text-muted">
											Al iniciar sesi??n o al crear una cuenta, aceptas nuestros T??rminos y
											condiciones y la Pol??tica de privacidad
										</p>
										<h2 />
										<hr />
									</form>
								</div>
							</div>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-info mb-0 btn-md "
						data-toggle="modal"
						data-target="#exampleModal">
						Iniciar Sesion
					</button>
					<div
						className="modal fade"
						id="exampleModal"
						tabIndex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true">
						<div className="modal-dialog modal-lg modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">
										<div className="container px-lg-5 ">
											<div className=" row ">
												<div className="col-2 py-3 px-lg-5 ">
													<img
														className="float-left"
														src={logo2}
														alt=""
														width="72"
														height="72"
													/>
												</div>
												<div className="col py-3 px-lg-5">
													<h3 className="text-right display-4">Inicia sesi??n</h3>
												</div>
											</div>
										</div>
									</h5>
									<button
										type="button btn-lg"
										className="close btn-lg"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<form className="form-signin">
										<div className="form-row ">
											<div className="col justify-content-start">
												<label
													htmlFor="inputEmail"
													className="form-label text-dark font-weight-bold">
													Usuario
												</label>
											</div>
											<div className="col">
												<input
													type="email"
													className="form-control"
													id="exampleFormControlInput1"
													placeholder="Email"
													name="email"
													onChange={changeInput}
												/>
											</div>
										</div>
										<div className="w-100"></div>
										<div className="form-row">
											<div className="col">
												<label
													htmlFor="inputPassword"
													className="form-label text-dark font-weight-bold">
													Contrase??a
												</label>
											</div>
											<div className="col">
												<input
													type="password"
													className="form-control"
													id="inputPassword"
													placeholder="Password"
													name="password"
													onChange={changeInput}
												/>
											</div>
										</div>
										<div className="justify-content-center ml-4">
											<div className="checkbox mb-3">??Olvidaste tu contrase??a?</div>
											<button
												type="button"
												className="btn btn-lg btn-warning btn-block"
												onClick={submitForm}
												data-dismiss="modal">
												Iniciar sesi??n
											</button>

											<p className="text-center">??No tienes cuenta? Reg??strate</p>
										</div>
										<hr className="hr-text" data-content="o usar una de estas opciones" />

										<div className="d-flex justify-content-center">
											<div className="justify-content-center mr-5">
												<GoogleLogin
													clientId="946040142718-3h25n3eak29rip9ftt5ko3sme27l8ob4.apps.googleusercontent.com"
													onSuccess={respuestaGoogle}
													onFailure={respuestaGoogle}
													cookiePolicy={"single_host_origin"}
												/>
											</div>
										</div>

										<p className="text-center mt-5 mb-3 text-muted">
											Al iniciar sesi??n o al crear una cuenta, aceptas nuestros T??rminos y
											condiciones y la Pol??tica de privacidad
										</p>
										<h2 />
										<hr />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="form-inline my-2 my-lg-0 ">
					<Link to="/myAccount" className="nav-link colored">
						Mi perfil
					</Link>
					<Link
						to="/"
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
