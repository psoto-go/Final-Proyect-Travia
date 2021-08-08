import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import logo from "../../img/golondrina.png";
import facebook from "../../img/facebooklogo.jpg";
import google from "../../img/googlelogo.png";
import apple from "../../img/apple.png";
import aaa from "../../img/aaaaa.png";

export const NewUser = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	const [check, setCheck] = useState(checkvalue);
	const [confirmValue, setConfirmValue] = useState();
	let history = useHistory();

	const checkvalue = {
		valuee: ""
	};

	const firstValue = {
		name: "",
		last_name: "",
		email: "",
		password: ""
	};

	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};

	const changeCheck = e => {
		setCheck({ ...check, [e.target.name]: e.target.value });
	};
	const changeInputConfirm = e => {
		setConfirmValue(e.target.value);
	};

	const submitForm = e => {
		e.preventDefault();
		if (loginValue.password === confirmValue && check.valuee == "user") {
			actions.register(loginValue);
			history.push("/admin");
		} else if (loginValue.password === confirmValue && check.valuee == "admin") {
			actions.register_admin(loginValue);
			history.push("/admin");
		} else {
			console.log("error");
		}
	};
	return (
		<>
			<div className="my-auto ">
				<div className="row">
					<div className="col">
						<img src={aaa} alt="..." className="img-thumbnail" />
					</div>
					<div className="col">
						<form className="form-signin" onSubmit={submitForm}>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="valuee"
									id="exampleRadios1"
									value="user"
									onChange={changeCheck}
								/>
								<label className="form-check-label" htmlFor="exampleRadios1">
									Usuario
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="valuee"
									id="exampleRadios2"
									value="admin"
									onChange={changeCheck}
								/>
								<label className="form-check-label" htmlFor="exampleRadios2">
									Administrador
								</label>
							</div>

							<div className="checkbox mb-3">
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
							</div>
							<button className="btn btn-lg btn-primary btn-block" type="submit">
								Crear cuenta
							</button>
						</form>
					</div>
					<div className="col">colcolcolcol</div>
					<div className="col">col</div>
				</div>
			</div>
			<div className="my-auto ">
				<div className="row">
					<div className="col" />
					<div className="col">
						<p>asdf</p>
					</div>
					<div className="col">colcolcolcol</div>
					<div className="col" />
				</div>
			</div>
		</>
	);
};
