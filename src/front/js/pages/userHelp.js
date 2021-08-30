import React from "react";

export const UserHelp = () => {
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
								<strong className="col-md-4 ">Ayuda</strong>
							</div>
						</a>
						<a href="#" className="list-group-item">
							<div className="row">
								<strong className="col-2">Politicas de datos</strong>{" "}
							</div>
						</a>
						<a href="#" className="list-group-item">
							<div className="row">
								<strong className="col-2">Politicas de reservas</strong>
							</div>
						</a>
						<a href="#" className="list-group-item">
							<div className="row">
								<strong className="col-2">Preguntas frecuentes</strong>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
