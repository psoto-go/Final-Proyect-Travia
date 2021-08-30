import React from "react";

export const UserConfig = () => {
	return (
		<div>
			<div className="m-5">
				<div className="row align-items-end">
					<div className="col-3">
						<h2>Lorem ipsum </h2>
						<p>Dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<div className="justify-content-center mt-1">
					<div className="list-group mt-4">
						<a href="#" className="list-group-item active">
							<div className="row">
								<strong className="col-md-4 ">Configuracion</strong>
							</div>
						</a>
						<a href="#" className="list-group-item">
							<div className="row">
								<strong className="col-2">Notificaciones</strong>{" "}
							</div>
						</a>
						<a href="#" className="list-group-item">
							<div className="row">
								<strong className="col-2">Preferencias</strong>
							</div>
						</a>
						<a href="#" className="list-group-item">
							<div className="row">
								<strong className="col-2">Seguridad</strong>
							</div>
						</a>
						<a href="#" className="list-group-item">
							<div className="row">
								<strong className="col-2">Idioma</strong>
							</div>
						</a>
					</div>
				</div>
				<div className="row justify-content-end mt-3">
					<button className="btn btn-dark">Cancelar</button>{" "}
					<button className="btn btn-success">Guardar</button>
				</div>
			</div>
		</div>
	);
};
