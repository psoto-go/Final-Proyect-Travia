import React, { useState } from "react";
import "../../styles/typeRoom.scss";
import { NavBarRoom } from "./navBarRoom";
export const TypeRoom = () => {
	const [loginValue, setLoginValue] = useState(firstValue);
	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};
	const firstValue = {
		place: "",
		datein: "",
		dateout: "",
		number: ""
	};
	return (
		<div className="typeRoom1">
			<NavBarRoom />
			<div className="row containerRoom">
				<div className="col-6 m-0 p-0">
					<div className="row m-0 p-0">
						<div className="photoRoom col-6">
							<img
								src="https://media.istockphoto.com/photos/breakfast-served-on-a-hotel-bed-picture-id936331412?k=6&m=936331412&s=612x612&w=0&h=pYWrXHGTK_s3wgqjyMKrBUrIErGJKq4MS3SCk6tMx60="
								className="card-img-top imageRoom"
								alt="..."
							/>
							<div>
								<p className="text-center">Incluye foto</p>
							</div>
						</div>

						<div className="col-6">
							<div className="row">
								<div className="col-12">
									<p>
										<strong>Nombre de la habitacion</strong>
									</p>
									<div className="input-group mb-3">
										<div className="input-group-prepend" />
										<input
											type="text"
											className="form-control"
											placeholder="Habitacion doble"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>{" "}
										<button type="button" className="btn btn-outline-success">
											<input
												type="number"
												min="0"
												max="5"
												placeholder="0"
												id="number"
												name="number"
												onChange={changeInput}
											/>
											<i className="fas fa-male" />
										</button>
										<button type="button" className="btn btn-outline-success">
											<input
												type="number"
												min="0"
												max="5"
												placeholder="0"
												id="number"
												name="number"
												onChange={changeInput}
											/>
											<i className="fas fa-bed" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="col-12">
						<p>
							<strong>Fecha Inicial</strong>
						</p>

						<div className="input-group mb-3">
							<div className="input-group-prepend" />
							<input
								type="date"
								className="form-control"
								placeholder="Individual"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>{" "}
						</div>
					</div>
					<div className="col-12">
						<p>
							<strong>Fecha Final</strong>
						</p>

						<div className="input-group mb-3">
							<div className="input-group-prepend" />
							<input
								type="date"
								className="form-control"
								placeholder="Individual"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>{" "}
						</div>
					</div>
				</div>

				<div className="col-2">
					<div>
						<p>
							<strong>Precio / Noche</strong>
						</p>
						<div className="input-group mb-3">
							<div className="input-group-prepend" />
							<input
								type="text"
								className="form-control"
								placeholder="Individual"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>{" "}
						</div>
					</div>
				</div>
				{/* <div className="col-1">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<i className="fas fa-align-justify" />
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<p className="dropdown-item" href="#">
								Action
							</p>
							<p className="dropdown-item" href="#">
								Another action
							</p>
							<p className="dropdown-item" href="#">
								Something else here
							</p>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};
