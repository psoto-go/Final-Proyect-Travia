import React, { useState } from "react";
import photoHotel from "../../../img/photoHotel.png";
import userPhoto from "../../../img/usuariosPhoto.png";
import citiesPhoto from "../../../img/citiesPhoto.png";

export const AdmindashPrueba = () => {
	return (
		<div>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="https://images5.alphacoders.com/550/550707.jpg"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://media.traveler.es/photos/61376b3ef00fb1ba8d867375/16:9/w_1856,h_1044,c_limit/174260.jpg"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://www.wallpaperuse.com/wallp/41-410678_m.jpg"
							alt="Third slide"
						/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						style={{ borderRadius: "50%", width: "68%", height: "20%" }}
						aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next " href="#carouselExampleIndicators" role="button" data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
						style={{
							borderRadius: "50%",
							width: "68%",
							height: "20%"
						}}></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};
