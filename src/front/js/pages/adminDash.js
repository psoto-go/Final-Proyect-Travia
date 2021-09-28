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
		<div>
			<div className="row">
				<div className="offset-1 text-center">
					<h2 className="ml-4 ">Dashboard</h2>
				</div>
			</div>
			<div className="justify-content-center row">
				<div className="dashResponsive  col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 justify-content-center">
					<div className="col-11 mt-2 contentUser">
						<Link to="/adminHoteles">
							<HotelDash />
						</Link>
					</div>
					<div className="row col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						<div className="col-12 contentUser2">
							<Link>
								<UserDash />
							</Link>
						</div>

						<div className="col-12 contentUser2">
							<Link>
								<CarrouselDash />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
