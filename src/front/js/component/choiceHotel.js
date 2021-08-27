import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const ChoiceHotel = () => {
	return (
		<>
			<div className="hotelSelect" style={{ width: "500px" }}>
				<a style={{ width: "500px" }}>
					{props.name} <i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					{"  "}
					<a>
						Services <i className="fas fa-dumbbell" /> <i className="fas fa-wifi" />{" "}
						<i className="fas fa-wheelchair" /> <i className="fas fa-paw" />
					</a>
					<hr />
				</a>

				<div>
					<div className="col-sm-5">
						<img
							style={{ width: "300px", borderRadius: "50px" }}
							className="card-img"
							src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
							alt="Jacuzzi"
						/>
					</div>

					<div className="cardPrice">
						<p>Tipo de habitaciones por Noche</p>
						<hr />
						<p>Habitación Doble desde 49€</p>
						<br />
						<p>Habitación Premium desde 79€</p>
						<div className="card-body">
							<Link to={"/hotel/1"} className="btn btn-warning">
								Vacancy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
ChoiceHotel.propTypes = {
	name: PropTypes.string
};
