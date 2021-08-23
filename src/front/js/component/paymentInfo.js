import React, { useState } from "react";
import "../../styles/paymentGateway.scss";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
					<PhoneInput placeholder="Enter phone number" value={value} onChange={setValue} />
				</div>
				<div className="form-group">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="gridCheck" />
						<label className="form-check-label" htmlFor="gridCheck">
							Check me out
						</label>
					</div>
				</div>
			</form>
		</div>
	);
};
