import React from "react";

export const Subscribe = () => {
	return (
		<>
			<h2 className="mx-auto">Afiliate a nuestro Newsletter</h2>
			<form className="mx-auto form-inline my-2 my-lg-0">
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
		</>
	);
};
