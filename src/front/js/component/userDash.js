import React from "react";
import "../../styles/userDash.scss";
import { Link } from "react-router-dom";

export const UserDash = () => {
	return (
		<div className="contentUser mz-5">
			<div className="row ">
				<div className="col-4 mt-5">Nombre</div>
				<div className="col-4 mt-5">Apellido</div>
				<div className="col-4 mt-5">Email</div>
			</div>
			<hr />
			<label className="form-check-label" htmlFor="exampleCheck1" />
			<div className="row">
				<div className="col-4">Alejandro</div>
				<div className="col-4">Moran</div>
				<div className="col-4">alejandro@gmail.com</div>
			</div>
			<hr />
			<div>
				<Link to="/admin">
					<h3>Usuarios</h3>
				</Link>
			</div>
		</div>
	);
};
