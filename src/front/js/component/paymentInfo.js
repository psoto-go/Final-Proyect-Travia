import React, { useState } from "react";
import "../../styles/paymentGateway.scss";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Stripe } from "../component/stripe";

export const PaymentInfo = () => {
	const [value, setValue] = useState();

	return (
		<div>
			<h1>Informacion del huesped</h1>
			<Link>
				<h4>¿Ya eres usuario? Iniciar sesión</h4>
			</Link>
			<form>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Correo electronico</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Confirmar correo</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Nombre</label>
						<input type="name" className="form-control" id="inputEmail4" />
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Apellido</label>
						<input type="lastname" className="form-control" id="inputEmail4" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputAddress">Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
				</div>
				<div className="form-group">
					<label htmlFor="inputAddress2">Address 2</label>
					<input
						type="text"
						className="form-control"
						id="inputAddress2"
						placeholder="Apartment, studio, or floor"
					/>
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputCity">City</label>
						<input type="text" className="form-control" id="inputCity" />
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="inputState">State</label>
						<select id="inputState" className="form-control">
							<option selected>Choose...</option>
							<option>...</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label htmlFor="inputZip">Zip</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
				</div>
				<div>
					<div className="input-group mb-1">
						<select className="custom-select" id="inputGroupSelect02">
							<option selected>Day</option>

							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<div className="input-group-append" />
						<select className="custom-select" id="inputGroupSelect02">
							<option selected>Month</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<div className="input-group-append " />
						<select className="custom-select" id="inputGroupSelect02">
							<option selected>Year</option>

							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<div className="input-group-append" />
					</div>
					<p className="mb-4 mt-0">Debes ser mayor de 18 años para contratar mediante travia</p>
				</div>
				<PhoneInput placeholder="Enter phone number" value={value} onChange={setValue} />
				<div className="form-group">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="gridCheck" />
						<label className="form-check-label" htmlFor="gridCheck">
							Check me out
						</label>
					</div>
				</div>
				<div className="form-row mb-0">
					<div className="form-group col-md-6 mb-0">
						<label htmlFor="inputEmail4">Crear contraseña</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Repetir contraseña</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
				</div>
				<p className="mb-4 mt-0">(8 a 30 caracteres, sin espacios)</p>
			</form>
			<div className="input-group">
				<div className="input-group-prepend">
					<div className="input-group-text">
						<input type="radio" aria-label="Radio button for following text input" />
					</div>
					Recibir notificaciones sobre Travia, nuevas ubicaciones y ofertas especiales.
				</div>
			</div>
			<div className="mt-4">
				<h1>Seleccionar tarifa</h1>
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
			</div>
			<div className="my-4">
				<h1>Informacion de pago</h1>
				<div className="form-row">
					<div className="form-group col">
						<label htmlFor="inputEmail4">Nombre completo del titular de la tarjeta</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
				</div>
			</div>
			<Stripe />
		</div>
	);
};
