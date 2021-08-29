import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const ChoiceHotel = props => {
	return (
		<div>
			<div className="hotelSelect" style={{ width: "400px" }}>
				<div style={{ width: "400px" }} className="font-weight-bold p-2">
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

				<div className="row">
					<div className="col-sm-6">
						<img
							style={{ width: "300px", borderRadius: "50px" }}
							className="card-img"
							src={props.url}
							alt="Jacuzzi"
						/>
					</div>
					<div className="col-6">
						<div className="cardPrice">
							<p className="font-weight-bold">Tipo de habitaciones por Noche</p>

							{props.rooms.map((room, index) => {
								// console.log(room.kind);
								return (
									<div key={index}>
										<p>
											Habitación {room.kind} desde {room.price} €
										</p>
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
			</div>
		</div>
	);
};
ChoiceHotel.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	rooms: PropTypes.array
};
