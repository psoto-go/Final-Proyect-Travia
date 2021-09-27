import React from "react";
import "../../styles/userDash.scss";
import { Link } from "react-router-dom";
import userPhoto from "../../img/usuariosPhoto.png";

export const UserDash = () => {
	return (
		<div className="row">
			<div className="col-12 text-center">
				<img className="img-hotel" src={userPhoto} />
			</div>

			<div className="col-12 text-center">
				<h3 className="">Usuarios</h3>
			</div>
		</div>
	);
};
