import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import logo from "../../img/golondrina.png";
import facebook from "../../img/facebooklogo.jpg";
import google from "../../img/googlelogo.png";
import apple from "../../img/apple.png";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	const [confirmValue, setConfirmValue] = useState();
	let history = useHistory();

	const firstValue = {
		name: "",
		last_name: "",
		email: "",
		password: ""
	};

	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};
	const changeInputConfirm = e => {
		setConfirmValue(e.target.value);
	};

	const submitForm = e => {
		e.preventDefault();
		if (loginValue.password === confirmValue) {
			actions.register(loginValue);
			history.push("/welcome");
		} else {
			console.log("error");
		}
	};
	return (
		<div className="offset-4 col-4 my-auto text-center">
			<form className="form-signin" onSubmit={submitForm}>
				<img className="mb-4" src={logo} alt="" width="72" height="72" />
				<div className="checkbox mb-3">
					<h1 className="text-center mb-3 font-weight-normal">Crear una cuenta</h1>
					¿Ya tienes una cuenta?
				</div>

				<hr />
				<div className="form-group row">
					<label htmlFor="inputEmail" className="col-sm-2 col-form-label">
						Nombre
					</label>

					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Nombre"
							name="name"
							onChange={changeInput}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputEmail" className="col-sm-2 col-form-label">
						Apellido
					</label>

					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput"
							placeholder="Apellido"
							name="last_name"
							onChange={changeInput}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputEmail" className="col-sm-2 col-form-label">
						Email
					</label>

					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput12"
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
							id="inputPassword1"
							placeholder="Password"
							name="password"
							onChange={changeInput}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputPassword2" className="col-sm-2 col-form-label">
						Repetir contraseña
					</label>
					<div className="col-sm-10">
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

				<button className="btn btn-lg btn-primary btn-block" type="submit">
					Crear cuenta
				</button>

				<hr className="hr-text" data-content="o usar una de estas opciones" />
				<div className="d-flex justify-content-center">
					<img className="mr-5" src={facebook} alt="" width="72" height="72" />

					<img className="mr-5" src={google} alt="" width="72" height="72" />

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
