import React from "react";

export const Contacto = () => {
	return (
		<div>
			<form>
				<h3>Contacto</h3>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputName">Name</label>
						<input
							type="name"
							className="form-control"
							id="inputName"
							placeholder="Indica tu nombre completo"
						/>
					</div>

					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Email</label>
						<input
							type="email"
							className="form-control"
							id="inputEmail4"
							placeholder="Indica tu correo electronico"
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputProvincia">Provincia</label>
					<input type="text" className="form-control" id="inputProvincia" placeholder="Indica tu Provincia" />
				</div>
				<div className="form-group">
					<label htmlFor="inputHotel">Hotel</label>
					<input type="text" className="form-control" id="inputHotel" placeholder="Indica tu Hotel" />
				</div>
				<div className="form-group">
					<label htmlFor="inputHotel">Fecha</label>
					<input type="date" className="form-control col-md-3" id="date" placeholder="reserva dd/mm/aa" />
				</div>

				<button type="submit" className="btn btn-primary">
					Enviar Formulario
				</button>
			</form>
		</div>
	);
};
