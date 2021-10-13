import React from "react";
import { Link } from "react-router-dom";
import palomita from "../../img/palomita.png";

export const Success = () => {
	return (
		<div className="m-5">
			<div className="offset-4 col-4 my-auto text-center">
				<form className="form-signin">
					<h1 className="text-center mb-3 font-weight-normal">Reserva completada !</h1>
					<hr />
					<img className="mb-4" src={palomita} alt="" width="150" height="150" />
					<h2 className="text-center mb-3 font-weight-normal">Tu reserva se ha realizado con éxito</h2>
					<h2 />

					<hr />
					<Link to="/">
						<button className="btn btn-lg btn-warning btn-block" type="submit">
							Volver a inicio
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
