import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/paymentGateway.scss";
import { Link } from "react-router-dom";

import "react-phone-input-2/lib/style.css";
import { Stripe } from "../component/stripe";

export const PaymentInfo = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	const [confirmValue, setConfirmValue] = useState();
	const token = localStorage.getItem("token");
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
		<div>
			{!token ? (
				<>
					<div className="mb-2">
						<h1>Informacion del huesped</h1>
					</div>

					<div className="mb-2">
						<Link to="/login">
							<h4>¿Ya eres usuario? Iniciar sesión</h4>
						</Link>
					</div>

					<form className="form-signin" onSubmit={submitForm}>
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

						<p className="text-center mt-5 mb-3 text-muted">
							Al iniciar sesión o al crear una cuenta, aceptas nuestros Términos y condiciones y la
							Política de privacidad
						</p>
					</form>
				</>
			) : (
				""
			)}
			{/* <div className="input-group">
				<div className="input-group-prepend">
					<div className="input-group-text">
						<input type="radio" aria-label="Radio button for following text input" />
					</div>
					Recibir notificaciones sobre Travia, nuevas ubicaciones y ofertas especiales.
				</div>
			</div>
			<div className="mt-5">
				<h1 className="my-4">Seleccionar tarifa</h1>
				<div className="input-group border">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="radio" aria-label="Radio button for following text input" />
						</div>
						Recibir notificaciones sobre Travia, nuevas ubicaciones y ofertas especiales.
					</div>
				</div>
				<div className="input-group border">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="radio" aria-label="Radio button for following text input" />
						</div>
						Recibir notificaciones sobre Travia, nuevas ubicaciones y ofertas especiales.
					</div>
				</div>
			</div> */}
			<div className="my-5">
				<h1>Informacion de pago</h1>
				<div className="form-row">
					<div className="form-group col">
						<label htmlFor="inputEmail4">Nombre completo del titular de la tarjeta</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
				</div>
				<Stripe />
			</div>
		</div>
	);
};
