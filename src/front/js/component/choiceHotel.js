import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const ChoiceHotel = props => {
	return (
		<>
			<div className="hotelSelect" style={{ width: "500px" }}>
				<div style={{ width: "500px" }}>
					{props.name}
					{/* <i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" /> */}
					{/* <div>
						Services <i className="fas fa-dumbbell" /> <i className="fas fa-wifi" />{" "}
						<i className="fas fa-wheelchair" /> <i className="fas fa-paw" />
					</div> */}
					<hr />
				</div>

				<div>
					<div className="col-sm-5">
						<img
							style={{ width: "300px", borderRadius: "50px" }}
							className="card-img"
							src={props.url}
							alt="Jacuzzi"
						/>
					</div>

					<div className="cardPrice">
						<p>Tipo de habitaciones por Noche</p>
						<hr />
						{props.rooms.map((room, index) => {
							// console.log(room.kind);
							return (
								<div key={index}>
									<p>
										Habitación {room.kind} desde {room.price} €
									</p>
									<br />
								</div>
							);
						})}

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
	name: PropTypes.string,
	url: PropTypes.string,
	rooms: PropTypes.array
};
