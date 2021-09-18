import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admDash.scss";
import "../../styles/carrouselDash.scss";
import "../../styles/userDash.scss";

import { ListGroup } from "../component/listGroup";
import { CarrouselDash } from "../component/carrouselDash";
import { HotelDash } from "../component/hotelDash";
import { UserDash } from "../component/userDash";

export const Admindash = () => {
	return (
		<>
			<div>
				<div className="row container text-center">
					<div className="col">
						<h2 className="ml-3">Dashboard</h2>
					</div>

					<div className="row">
						<Link to="#" className="col-2 mx-auto">
							Adm Panel{" "}
						</Link>
						<p className="col align-self-center">/ Dashboard</p>
					</div>
				</div>

				<div className=" container text-center">
					<div className="row">
						<div className="col-md-12">
							<div className="search" id="custom-search-input">
								<div className="input-group col-12">
									<input type="text" className="form-control input-lg" placeholder="Buscar" />
									<span className="input-group-btn">
										<button className="btn btn-info " type="button">
											<i className="fas fa-search font-weight-bold" />
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6 hotelDiv">
						<Link to="/adminHoteles">
							<HotelDash />
						</Link>
					</div>
					<div className="col-6 userAdm">
						<UserDash />

						<div className="row pl-5 m-2 contentUser">
							<CarrouselDash />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
