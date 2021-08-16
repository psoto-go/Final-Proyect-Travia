import React from "react";
import "../../styles/userDash.scss";

export const UserDash = () => {
	return (
		<div>
			<div className="row">
				<div className="col-4">Nombre</div>
				<div className="col-4">Apellido</div>
				<div className="col-4">Email</div>
			</div>
			<div className="row">
				<div className="col-4">Alejandro</div>
				<div className="col-4">Moran</div>
				<div className="col-4">alejandro@gmail.com</div>
			</div>
			<div>
				<h2>Usuarios</h2>
			</div>
		</div>
	);
};
