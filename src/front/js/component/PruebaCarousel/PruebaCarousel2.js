import React, { Component, useContext, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const PruebaCarousel2 = () => {
	return (
		<Carousel>
			<Carousel.Item interval={1000}>
				<img
					className="d-block w-100"
					src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					className="d-block w-100"
					src="https://static.barcelo.com/content/dam/bhg/master/es/hoteles/guatemala/guatemala-city/barcelo-guatemala-city/main-photos/hotel/BGUA_VIEW_01.jpg"
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://st.depositphotos.com/2118371/2682/i/600/depositphotos_26829847-stock-photo-hotel-pools.jpg"
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
