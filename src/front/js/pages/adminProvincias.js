import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admDash.scss";
import { Provincias } from "../component/provincias";

export const AdminProvincias = () => {
	return (
		<>
			<div>
				<div className="container text-center">
					<div className="row">
						<div className="col-md-4">
							<h1>Provincias</h1>
						</div>
						<div className="col-md-4 ml-auto">
							<Link to="#">Dashboard</Link> / Provincias
							<div className="col" />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-10">
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
						<div className="col-2">
							<button className=" create">+ Crear provincia</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Provincias />
			</div>
		</>
	);
};