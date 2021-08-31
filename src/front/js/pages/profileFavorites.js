import { Map } from "../component/map";
import React, { Component, useContext, useState, useEffect } from "react";
import { Featured } from "../component/featured";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const ProfileFavorites = () => {
	return (
		<div className="contai">
			<div className="row pt-5">
				<div className="col-6">
					<div>
						<div className="card" style={{ width: "900px" }}>
							<div className="card-body">
								<div className="row">
									<h5 className="card-title col">Hotel Name</h5>{" "}
									<button type="button" className="btn btn-primary  btn-sm col">
										Primary
									</button>
									<button type="button" className="btn btn-warning  btn-sm col">
										Primary
									</button>
								</div>
								<Featured />
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 moving float-right">
					<Map />
				</div>
			</div>
		</div>
	);
};

Featured.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	city_id: PropTypes.number
};
