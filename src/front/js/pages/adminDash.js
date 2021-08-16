import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admDash.scss";
import { ListGroup } from "../component/listGroup";
import { CarrouselDash } from "../component/carrouselDash";
import { HotelDash } from "../component/hotelDash";
import { UserDash } from "../component/userDash";

export const Admindash = () => {
	return (
		<>
			<div>
				<div className="container text-center">
					<div className="row">
						<div className="col-md-4">
							<h1>Dashboard</h1>
						</div>
						<div className="col-md-4 ml-auto">
							<Link to="#">Panel admin</Link> / Dashboard
							<div className="col" />
						</div>
					</div>
				</div>
				<div className=" container text-left">
					<div className="row">
						<div className="col-md-12">
							<div className="search" id="custom-search-input">
								<div className="input-group col-md-12">
									<input type="text" className="form-control input-lg" placeholder="Buscar" />
									<span className="input-group-btn">
										<button className="btn btn-info " type="button">
											<i className="fas fa-search" />
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container2">
					<div className="item-1 ">
						<HotelDash />
					</div>
					<div className="item-2">
						<CarrouselDash />
					</div>

					<div className="item-3 ">
						<UserDash />
					</div>
				</div>
			</div>
		</>
	);
};
