import React from "react";

export const ProfileReservations = () => {
	return (
		<div className="mx-5">
			<h2 className="display-4">Loren Ipsum</h2>
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<a
						className="nav-link active"
						id="Proximas-tab"
						data-toggle="tab"
						href="#Proximas"
						role="tab"
						aria-controls="Proximas"
						aria-selected="true">
						Proximas
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="next-tab"
						data-toggle="tab"
						href="#next"
						role="tab"
						aria-controls="next"
						aria-selected="true">
						Anteriores
					</a>
				</li>
			</ul>
			<div>
				<div className="tab-pane fade show active" id="Proximas" role="tabpanel" aria-labelledby="Proximas-tab">
					<div className="jumbotron p-5 m-0">
						<h1 className="display-4 ">Reservas</h1>
						<hr className="my-4"></hr>
						<p className="lead text-right">No tienes reservas proximamente / Tienes reservas !</p>
					</div>
					<div className="row mt-5">
						<div className="col ">
							<p href="#" className="btn btn-warning btn-lg" role="button">
								Buscar Alojamiento
							</p>
						</div>
						<div className="float-right ">
							<p href="#">dolor sit amenum </p>
						</div>
					</div>
				</div>
				<div className="tab-pane fade" id="next" role="tabpanel" aria-labelledby="next-tab">
					<div className="row">
						<div className="card container-sm col-6">
							<img
								className="card-img"
								src="https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218303820_ahxjmr.jpg"
								alt="Jacuzzi"
								style={{ width: "300px" }}
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<div>
									<p className="card-text">Last updated 3 mins ago</p>
									<a href="#" className="card-link">
										Mostrar mas
									</a>
								</div>
							</div>
						</div>
						<div className="card container-sm col-6">
							<img
								className="card-img"
								src="https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218303820_ahxjmr.jpg"
								alt="Jacuzzi"
								style={{ width: "300px" }}
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<div>
									<p className="card-text">Last updated 3 mins ago</p>
									<a href="#" className="card-link">
										Mostrar mas
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
