import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admDash.scss";
import "../../styles/carrouselDash.scss";
import "../../styles/userDash.scss";
import "../../styles/adminDash/adminDash.scss";

import { CarrouselDash } from "../component/carrouselDash";
import { HotelDash } from "../component/hotelDash";
import { UserDash } from "../component/userDash";
import { AdmindashPrueba } from "../component/adminDashPrueba/adminDashPrueba";

export const Admindash = () => {
	return (
		<div>
			<div>
				<div className="row">
					<div className="offset-1 text-center">
						<h2 className="ml-4 ">Dashboard</h2>
					</div>
				</div>

				<div className="justify-content-center">
					<div className="col-6 mt-5 contentUser">
						<Link to="/adminHoteles">
							<HotelDash />
						</Link>
					</div>
					<div className="row">
						<div className="col-6 mt-3 mb-3 mr-3 contentUser">
							<Link>
								<UserDash />
							</Link>
						</div>

						<div className="col-6 mt-3 mb-3 mr-3 contentUser">
							<Link>
								<CarrouselDash />
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <AdmindashPrueba /> */}
		</div>
	);
};
