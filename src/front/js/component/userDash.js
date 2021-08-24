import React from "react";
import "../../styles/userDash.scss";
import { Link } from "react-router-dom";

export const UserDash = () => {
	return (
		<div className="contentUser">
			<div className="row contentUser">
				<div className="col-4">Nombre</div>
				<div className="col-4">Apellido</div>
				<div className="col-4">Email</div>
			</div>
			<label className="form-check-label" htmlFor="exampleCheck1" />
			<div className="row contentUser">
				<div className="col-4">Alejandro</div>
				<div className="col-4">Moran</div>
				<div className="col-4">alejandro@gmail.com</div>
			</div>
			<div className="mt-4 m-3">
				<Link to="/admin">
					<h2>Usuarios</h2>
				</Link>
			</div>
		</div>
	);
};
