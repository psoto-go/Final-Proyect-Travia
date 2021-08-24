import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admDash.scss";

export const AdminHoteles = () => {
	return (
		<>
			<div>
				<div className="container  text-center">
					<div className="row conjunto">
						<div className="col-md-4">
							<h1>Hoteles</h1>
						</div>
						<div className="col-md-4 ml-auto">
							<Link to="#">Dashboard</Link> / Hoteles
							<div className="col" />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-9">
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
						<div className="col-3 text-center">
							<Link to="onlyHotel">
								<button className=" create">+ Crear hotel</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="hotels">
					<div className="list-group">
						<button type="button" className="buttonHotels list-group-item list-group-item-action">
							<div className="hotelImg">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
								<div className="content-1">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<Link>
												<p>Link del sitio del hotel</p>
											</Link>

											<p className="card-text">
												Some quick example text to build on the card title and make up the bulk
												of the cards content.
											</p>
										</div>
									</div>
								</div>
								<div className="content-2">
									<h5 className="resePunto">4.8 Reseñas</h5>
									<h5 className="resePunto">★★★★</h5>
									<div>
										<button type="button" className="reseñas btn btn-secondary">
											Mostrar Reseñas
										</button>
									</div>
								</div>
								<div className="content-3">
									<div className="dropdown">
										<button
											className="btn"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-ellipsis-v" />
										</button>
									</div>
								</div>
							</div>
						</button>
						<button type="buttonHotels" className=" buttonHotels  list-group-item list-group-item-action">
							<div className="hotelImg">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
								<div className="content-1">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<Link>
												<p>Link del sitio del hotel</p>
											</Link>

											<p className="card-text">
												Some quick example text to build on the card title and make up the bulk
												of the cards content.
											</p>
										</div>
									</div>
								</div>
								<div className="content-2">
									<h5 className="resePunto">4.8 Reseñas</h5>
									<h5 className="resePunto">★★★★</h5>
									<div>
										<button type="button" className="reseñas btn btn-secondary">
											Mostrar Reseñas
										</button>
									</div>
								</div>
								<div className="content-3">
									<div className="dropdown">
										<button
											className="btn"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-ellipsis-v" />
										</button>
									</div>
								</div>
							</div>
						</button>
						<button type="button" className=" buttonHotels list-group-item list-group-item-action">
							<div className="hotelImg">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
								<div className="content-1">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<Link>
												<p>Link del sitio del hotel</p>
											</Link>

											<p className="card-text">
												Some quick example text to build on the card title and make up the bulk
												of the cards content.
											</p>
										</div>
									</div>
								</div>
								<div className="content-2">
									<h5 className="resePunto">4.8 Reseñas</h5>
									<h5 className="resePunto">★★★★</h5>
									<div>
										<button type="button" className="reseñas btn btn-secondary">
											Mostrar Reseñas
										</button>
									</div>
								</div>
								<div className="content-3">
									<div className="dropdown">
										<button
											className="btn"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-ellipsis-v" />
										</button>
									</div>
								</div>
							</div>
						</button>
						<button type="button" className="buttonHotels list-group-item list-group-item-action" disabled>
							<div className="hotelImg">
								<img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" />
								<div className="content-1">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<Link>
												<p>Link del sitio del hotel</p>
											</Link>

											<p className="card-text">
												Some quick example text to build on the card title and make up the bulk
												of the cards content.
											</p>
										</div>
									</div>
								</div>
								<div className="content-2">
									<h5 className="resePunto">4.8 Reseñas</h5>
									<h5 className="resePunto">★★★★</h5>
									<div>
										<button type="button" className="reseñas btn btn-secondary">
											Mostrar Reseñas
										</button>
									</div>
								</div>
								<div className="content-3">
									<div className="dropdown">
										<button
											className="btn"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-ellipsis-v" />
										</button>
									</div>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div />
		</>
	);
};
