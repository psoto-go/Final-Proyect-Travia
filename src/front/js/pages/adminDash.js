import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { ListGroup } from "../component/listGroup";

export const Admindash = () => {
	return (
		<>
			<div>
				<div className="container text-center">
					<div className="row">
						<div className="col">
							<h1>Dashboard</h1>
						</div>
						<div className="col">
							<p>
								<Link to="#">Panel admin</Link> / Dashboard
							</p>
							<div className="col" />
						</div>
					</div>
				</div>
				<div id="custom-search-input">
					<div className="input-group col-md-12">
						<input type="text" className="form-control input-lg" placeholder="Buscar" />
						<span className="input-group-btn">
							<button className="btn btn-info btn-lg" type="button">
								<i className="bi bi-search" />
							</button>
						</span>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<img
								className="img-responsive"
								src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
							/>
							<div>HOTELES</div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-sm-12">
									<img
										className="img-responsive"
										src="https://lh3.googleusercontent.com/proxy/LhhdRjDxIxZ34Tgq5_s4vEUWah62KsJRRR3Xe0LLFg0MiXf-VS3t4DTEsIwiQ89RlZzSBc5vbsMMuUI4DqXkm9f8he88onpI7r3x"
									/>
									<div>USUARIOS</div>
								</div>
							</div>
							<div className="row bottom-right">
								<div className="col-sm-12">
									<img
										className="img-responsive"
										src="https://lh3.googleusercontent.com/proxy/LhhdRjDxIxZ34Tgq5_s4vEUWah62KsJRRR3Xe0LLFg0MiXf-VS3t4DTEsIwiQ89RlZzSBc5vbsMMuUI4DqXkm9f8he88onpI7r3x"
									/>
									<div>CIUDADES</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
