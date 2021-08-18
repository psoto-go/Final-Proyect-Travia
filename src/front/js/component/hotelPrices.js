import React, { Component } from "react";
import { Link } from "react-router-dom";
export const HotelPrices = () => {
	return (
		<div>
			<div className="card">
				<a>
					$Name Hotel
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					{"  "}
					<a>
						Services <i className="fas fa-dumbbell" /> <i className="fas fa-wifi" />{" "}
						<i className="fas fa-wheelchair" /> <i className="fas fa-paw" />
					</a>
					<hr />
				</a>

				<div className="cardPriceContent">
					<div>
						<div className="row no-gutters">
							<div className="col-xm-5">
								<img
									className="card-img"
									src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
									alt="Jacuzzi"
								/>
							</div>
						</div>
					</div>
					<div className="cardPrice">
						<p>
							Habitación $Tipo Especificaciones:{" "}
							<li>
								1 habitacion,{" "}
								<li>
									2 personas
									<li>1 baño</li>
								</li>
							</li>
						</p>
						<div className="card">
							<Link to={"/"} className="btn btn-primary">
								$Price
							</Link>
						</div>
						<h6>Reserva por $Price / Noche ( impuestos incluidos)</h6>
					</div>
				</div>
			</div>
		</div>
	);
};
