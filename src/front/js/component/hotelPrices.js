import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/index.scss";

export const HotelPrices = () => {
	return (
		<div className="card">
			<a>
				Arcadia Hotel
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				{"  "}
				<a>
					Servicios <i className="fas fa-dumbbell" /> <i className="fas fa-wifi" />{" "}
					<i className="fas fa-wheelchair" /> <i className="fas fa-paw" />
				</a>
				<hr />
			</a>

			<div>
				<div>
					<div className="row">
						<div className="col-4">
							<img
								className="card-img"
								src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
								alt="Jacuzzi"
							/>
						</div>
						<div className="col-4">
							<p>
								Habitación Doble Especificaciones:{" "}
								<li>
									1 habitacion,{" "}
									<li>
										2 personas
										<li>1 baño</li>
									</li>
								</li>
							</p>
						</div>
						<div className="col-4">
							<Link to={"/"} className="btn btn-primary">
								780€
							</Link>
							<h6>Reserva por 35€ / Noche ( impuestos incluidos)</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
