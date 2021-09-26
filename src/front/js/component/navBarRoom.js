import React from "react";
import "../../styles/typeRoom.scss";

export const NavBarRoom = () => {
	return (
		<div className="row headerRoom m-0">
			<p className="col-3">Imagen</p>
			<p className="col-3">Tipo de habitacion</p>
			<p className="col-3">Fechas</p>
			<p className="col-3">Precio</p>
		</div>
	);
};
