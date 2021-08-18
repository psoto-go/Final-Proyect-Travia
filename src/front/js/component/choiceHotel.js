import React, { Component } from "react";
import { Link } from "react-router-dom";
export const ChoiceHotel = () => {
	return (
		<>
			<div className="card" style={{ width: "500px" }}>
				<a style={{ width: "500px" }}>
					Hotel $Name <i className="fas fa-star" />
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
						<div>
							<div className="col-sm-5">
								<img
									style={{ width: "300px", borderRadius: "50px" }}
									className="card-img"
									src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
									alt="Jacuzzi"
								/>
							</div>
						</div>
					</div>
					<div className="cardPrice">
						<a>Tipo de habitaciones por Noche</a>
						<hr />
						<a>Habitación Doble desde $price</a>
						<br />
						<a>Habitación Premium desde $price</a>
						<div className="card-body">
							<Link to={"/hotelDetail"} className="btn btn-primary">
								Vacancy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
