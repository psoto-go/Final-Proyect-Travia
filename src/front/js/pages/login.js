import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { api_url } from "../constants";
import logo from "../../img/golondrina.png";
import facebook from "../../img/facebooklogo.jpg";
import google from "../../img/googlelogo.png";
import apple from "../../img/apple.png";
import GoogleLogin from "react-google-login";
import jwt from "jwt-decode"; // import dependency

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	let history = useHistory();

	useEffect(() => {
		selectKind();
	}, []);
	const selectKind = () => {
		const token = localStorage.getItem("token");
		if (token) {
			if (jwt(token).sub.kind == "user") {
				history.push("/user");
			} else if (jwt(token).sub.kind == "admin") {
				history.push("/adminDash");
			}
		}
	};
	const firstValue = {
		email: "",
		password: ""
	};

	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};

	const submitForm = async e => {
		e.preventDefault();

		let login = await actions.signin_user(loginValue);
		console.log(login);
		if (login) {
			selectKind();
		}
		// actions.loadUsers();
	};

	const respuestaGoogle = respuesta => {
		console.log(respuesta);
		// if (respuesta.accessToken) {
		// 	actions.signin_google(respuesta);
		// }
	};
	return (
		<div className="offset-4 col-4 my-auto text-center">
			<form className="form-signin" onSubmit={submitForm}>
				<img className="mb-4" src={logo} alt="" width="72" height="72" />
				<h1 className="text-center mb-3 font-weight-normal">Inicia sesión</h1>
				<hr />
				<div className="form-group row">
					<label htmlFor="inputEmail" className="col-sm-2 col-form-label">
						Email
					</label>

					<div className="col-sm-10">
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
				<div className="form-group row">
					<label htmlFor="inputPassword" className="col-sm-2 col-form-label">
						Contraseña
					</label>
					<div className="col-sm-10">
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
				<div className="checkbox mb-3">¿Olvidaste tu contraseña?</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">
					Iniciar sesión
				</button>
				<p className="text-right p-2">¿No tienes cuenta? Regístrate</p>
				<hr className="hr-text" data-content="o usar una de estas opciones" />
				<div className="d-flex justify-content-center">
					<img className="mr-5" src={facebook} alt="" width="72" height="72" />

					<GoogleLogin
						clientId="946040142718-3h25n3eak29rip9ftt5ko3sme27l8ob4.apps.googleusercontent.com"
						onSuccess={respuestaGoogle}
						onFailure={respuestaGoogle}
						cookiePolicy={"single_host_origin"}
					/>

					<img className="mr-5" src={apple} alt="" width="52" height="64" />
				</div>

				<p className="text-center mt-5 mb-3 text-muted">
					Al iniciar sesión o al crear una cuenta, aceptas nuestros Términos y condiciones y la Política de
					privacidad
				</p>
				<h2 />
				<hr />
			</form>
		</div>
	);
};
