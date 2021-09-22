// import React, { useState, useContext, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { useHistory } from "react-router-dom";
// import { api_url } from "../constants";
// import logo from "../../img/golondrina.png";
// import facebook from "../../img/facebooklogo.jpg";
// import google from "../../img/googlelogo.png";
// import apple from "../../img/apple.png";
// import GoogleLogin from "react-google-login";
// import jwt from "jwt-decode"; // import dependency

// //en lo que respecta a esta pagina
// // no la necesitamos mas.
// export const Login = () => {
// 	const { store, actions } = useContext(Context);
// 	const [loginValue, setLoginValue] = useState(firstValue);
// 	let history = useHistory();

// 	useEffect(() => {
// 		selectKind();
// 	}, []);
// 	const selectKind = () => {
// 		console.log("##");
// 		const token = localStorage.getItem("token");
// 		if (token) {
// 			console.log(jwt(token).sub.kind);
// 			if (jwt(token).sub.kind == "user") {
// 				history.push("/myAccount");
// 			} else if (jwt(token).sub.kind == "admin") {
// 				history.push("/adminDash");
// 			}
// 		}
// 	};
// 	const firstValue = {
// 		email: "",
// 		password: ""
// 	};

// 	const changeInput = e => {
// 		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
// 	};

// 	const submitForm = async e => {
// 		e.preventDefault();

// 		let login = await actions.signin_user(loginValue);
// 		console.log(login);
// 		if (login) {
// 			selectKind();
// 		}
// 		// actions.loadUsers();
// 	};
// 	const respuestaGoogle = async respuesta => {
// 		console.log(respuesta, "@@@@@@@@@@@@@@");
// 		if (!respuesta.error) {
// 			if ((await actions.signin_google(respuesta)) && (await actions.register_google(respuesta))) {
// 				console.log("#");
// 				history.push("/myAccount");
// 			}
// 		}
// 	};
// 	return (
// 		<>
// 			<button
// 				type="button"
// 				className="btn btn-outline-warning btn-sm"
// 				data-toggle="modal"
// 				data-target="#exampleModal">
// 				Iniciar
// 			</button>
// 			<div
// 				className="modal fade"
// 				id="exampleModal"
// 				tabIndex="-1"
// 				aria-labelledby="exampleModalLabel"
// 				aria-hidden="true">
// 				<div className="modal-dialog modal-lg modal-dialog-centered">
// 					<div className="modal-content">
// 						<div className="modal-header">
// 							<h5 className="modal-title" id="exampleModalLabel">
// 								<div className="container px-lg-5 ">
// 									<div className=" row ">
// 										<div className="col-2 py-3 px-lg-5 ">
// 											<img className="float-left" src={logo2} alt="" width="72" height="72" />
// 										</div>
// 										<div className="col py-3 px-lg-5">
// 											<h3 className="text-right display-4">Inicia sesión</h3>
// 										</div>
// 									</div>
// 								</div>
// 							</h5>
// 							<button
// 								type="button btn-lg"
// 								className="close btn-lg"
// 								data-dismiss="modal"
// 								aria-label="Close">
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="modal-body">
// 							<form className="form-signin" onSubmit={submitForm}>
// 								<div className="form-row ">
// 									<div className="col justify-content-start">
// 										<label htmlFor="inputEmail" className="form-label text-dark font-weight-bold">
// 											Usuario
// 										</label>
// 									</div>
// 									<div className="col">
// 										<input
// 											type="email"
// 											className="form-control"
// 											id="exampleFormControlInput1"
// 											placeholder="Email"
// 											name="email"
// 											onChange={changeInput}
// 										/>
// 									</div>
// 								</div>
// 								<div className="w-100"></div>
// 								<div className="form-row">
// 									<div className="col">
// 										<label
// 											htmlFor="inputPassword"
// 											className="form-label text-dark font-weight-bold">
// 											Contraseña
// 										</label>
// 									</div>
// 									<div className="col">
// 										<input
// 											type="password"
// 											className="form-control"
// 											id="inputPassword"
// 											placeholder="Password"
// 											name="password"
// 											onChange={changeInput}
// 										/>
// 									</div>
// 								</div>
// 								<div className="justify-content-center ml-4">
// 									<div className="checkbox mb-3">¿Olvidaste tu contraseña?</div>
// 									<button className="btn btn-lg btn-warning btn-block " type="submit">
// 										Iniciar sesión
// 									</button>

// 					<div className="col-sm-10">
// 						<input
// 							type="email"
// 							className="form-control"
// 							id="exampleFormControlInput1"
// 							placeholder="Email"
// 							name="email"
// 							onChange={changeInput}
// 						/>
// 					</div>
// 				</div>
// 				<div className="form-group row">
// 					<label htmlFor="inputPassword" className="col-sm-2 col-form-label">
// 						Contraseña
// 					</label>
// 					<div className="col-sm-10">
// 						<input
// 							type="password"
// 							className="form-control"
// 							id="inputPassword"
// 							placeholder="Password"
// 							name="password"
// 							onChange={changeInput}
// 						/>
// 					</div>
// 				</div>
// 				<div className="checkbox mb-3">¿Olvidaste tu contraseña?</div>
// 				<button className="btn btn-lg btn-primary btn-block" type="submit">
// 					Iniciar sesión
// 				</button>
// 				<p className="text-right p-2">¿No tienes cuenta? Regístrate</p>
// 				<hr className="hr-text" data-content="o usar una de estas opciones" />
// 				<div className="d-flex justify-content-center">
// 					<GoogleLogin
// 						clientId="946040142718-3h25n3eak29rip9ftt5ko3sme27l8ob4.apps.googleusercontent.com"
// 						onSuccess={respuestaGoogle}
// 						onFailure={respuestaGoogle}
// 						cookiePolicy={"single_host_origin"}
// 					/>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
