import React, { Component, useContext, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const PruebaCarousel2 = () => {
	return (
		<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://fishhotels-api.derbyhotels.com/storage/grehd/5d8231e37dac0081270a6bdf/xxl/fachada.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Some representative placeholder content for the second slide.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Some representative placeholder content for the third slide.</p>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
