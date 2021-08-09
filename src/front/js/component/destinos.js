import React from "react";

export const Destinos = () => {
	return (
		<>
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-8">
						<div className="card-body">
							<h3 className="card-title">Nuestros destinos</h3>
							<ul className="nav">
								<li className="nav-item">
									<a className="nav-link active" href="#">
										Asturias
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Murcia
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Mallorca
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										islas Canarias
									</a>
								</li>
							</ul>
							<div className="col-md-4">
								<img src={"https://freesvg.org/img/babayasin_Russia_outline_map.png"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
