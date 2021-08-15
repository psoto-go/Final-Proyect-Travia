import React from "react";

import { Carrousel } from "./carrousel";
export const Destinations = () => {
	return (
		<div className="lugares">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<a
						className="nav-link active"
						id="Asturias-tab"
						data-toggle="tab"
						href="#Asturias"
						role="tab"
						aria-controls="Asturias"
						aria-selected="true">
						Asturias
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="Murcia-tab"
						data-toggle="tab"
						href="#Murcia"
						role="tab"
						aria-controls="Murcia"
						aria-selected="false">
						Murcia
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="Mallorca-tab"
						data-toggle="tab"
						href="#Mallorca"
						role="tab"
						aria-controls="Mallorca"
						aria-selected="false">
						Mallorca
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="Canarias-tab"
						data-toggle="tab"
						href="#Canarias"
						role="tab"
						aria-controls="Canarias"
						aria-selected="false">
						Canarias
					</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="Asturias" role="tabpanel" aria-labelledby="Asturias-tab">
					<h2>Descubre $Lugar</h2>
					<hr />

					<div className="container-fluid">
						<div className="row">
							<div className="col-12 mt-3">
								<div className="card">
									<div className="card-horizontal">
										<div className="img-square-wrapper">
											<img
												className="picture"
												src="https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1586529185422-B9XBTSLKN3KFZDYBGKFI/que-ver-en-asturias-picos-portada.jpg?format=1500w"
												alt="Card image cap"
												style={{ width: "500px" }}
											/>
										</div>
										<div className="card-body">
											<h4 className="card-title">Lorem impsum dolor</h4>
											<p className="card-text">
												Lorem Ipsum is simply dummy text of the printing and typesetting
												industry. Lorem Ipsum has been the industrys standard dummy text ever
												since the 1500s
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Carrousel />
		</div>
	);
};
