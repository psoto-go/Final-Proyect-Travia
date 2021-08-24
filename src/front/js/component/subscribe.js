import React from "react";

export const Subscribe = () => {
	return (
		<div>
			<h2 className="text-center">Afiliate a nuestro Newsletter</h2>
			<form className="justify-content-center form-inline">
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
