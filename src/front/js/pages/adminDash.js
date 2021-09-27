import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admDash.scss";
import "../../styles/carrouselDash.scss";
import "../../styles/userDash.scss";
import "../../styles/adminDash/adminDash.scss";

import { CarrouselDash } from "../component/carrouselDash";
import { HotelDash } from "../component/hotelDash";
import { UserDash } from "../component/userDash";

export const Admindash = () => {
	return (
		<>
			<div>
				<div className="row">
					<div className="offset-1 text-center">
						<h2 className="ml-4 ">Dashboard</h2>
					</div>

					{/* <div className="col-4 row">
						<Link to="#" className="col-2 align-self-center">
							Adm Panel
						</Link>
						<p className="col align-self-center">/ Dashboard</p>
					</div> */}
				</div>

				{/* <div>
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
				</div> */}
				<div className="row">
					<div className="col-4 contentUser">
						<Link to="/adminHoteles">
							<HotelDash />
						</Link>
					</div>
					<div className="col-4 contentUser">
						<UserDash />
					</div>
					<div className="col-4 contentUser">
						<CarrouselDash />
					</div>
				</div>
			</div>
		</>
	);
};
