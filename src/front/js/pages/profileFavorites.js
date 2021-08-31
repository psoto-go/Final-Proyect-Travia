import { Map } from "../component/map";
import React, { Component, useContext, useState, useEffect } from "react";

import "../../styles/home.scss";

export const ProfileFavorites = () => {
	return (
		<div className="contai">
			<div className="row pt-5">
				<div className="col-6">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p className="card-text">
								With supporting text below as a natural lead in to additional content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>

						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p>With supporting text below as a natural lead in to additional content.</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
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
