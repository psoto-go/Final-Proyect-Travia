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
					</div>  d-none d-lg-block d-xl-block */}
					<hr />
				</div>

				<div className="row">
					<div className="col-sm-6">
						<img
							style={{ width: "90%", borderRadius: "15%" }}
							className="card-img "
							src={props.url}
							alt="Jacuzzi"
						/>
					</div>
					<div className="col-sm-6">
						<div>
							<p className="font-weight-bold p-0">Tipo de habitaciones por Noche</p>

							{props.rooms.map((room, index) => {
								// console.log(room.kind);
								return (
									<div key={index}>
										<p className="mb-0">
											Habitación {room.kind} desde {room.price}€
										</p>
									</div>
								);
							})}

							<div className="card-body p-0">
								<Link to={"/hotel/" + props.id} className="btn btn-warning">
									Reserva
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
	rooms: PropTypes.array,
	id: PropTypes.num
};
