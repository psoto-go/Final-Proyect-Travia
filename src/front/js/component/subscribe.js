import React from "react";

export const Subscribe = () => {
	return (
		<div>
			<form className="justify-content-center form-inline">
				<h2 className="font-weight-lighter text-center">Afiliate a nuestro Newsletter</h2>
				<input
					className="form-control mr-sm-2"
					type="text"
					placeholder="correo electronico"
					aria-label="text"
				/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Suscribete
				</button>
			</form>
		</div>
	);
};
