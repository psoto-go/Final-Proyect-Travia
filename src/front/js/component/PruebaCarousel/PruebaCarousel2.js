import React, { Component, useContext, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Gallery } from "../../component/gallery";
import { Link, useParams } from "react-router-dom";
import { api_url } from "../../constants";
import "../../../styles/hotelDetail/hotelDetail.scss";
import PropTypes from "prop-types";

export const PruebaCarousel2 = props => {
	const [hotel, setHotel] = useState({});
	const params = useParams();

	useEffect(() => {
		fetch(api_url + "/api/hotel/" + params.theid)
			.then(response => response.json())
			.then(result => {
				setHotel(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	const listGallery = hotel.HotelArchives ? (
		<Gallery
			urls={hotel.HotelArchives.map(item => {
				return item.url;
			})}
		/>
	) : (
		""
	);

	return (
		<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active ">
					<img src={props.urls[0]} className="" alt="..." style={{ width: "100vw", height: "35vw" }} />
					<div className="carousel-caption d-none d-md-block">
						<h5>{hotel.name}</h5>
					</div>
				</div>

				<div className="carousel-item ">
					<img src={props.urls[1]} className=" " alt="..." style={{ width: "100vw", height: "35vw" }} />
					<div className="carousel-caption d-none d-md-block">
						<h5>{hotel.name}</h5>
					</div>
				</div>
				<div className="carousel-item ">
					<img src={props.urls[2]} className=" " alt="..." style={{ width: "100vw", height: "35vw" }} />
					<div className="carousel-caption d-none d-md-block">
						<h5>{hotel.name}</h5>
					</div>
				</div>
				<div className="carousel-item ">
					<img src={props.urls[3]} className=" " alt="..." style={{ width: "100vw", height: "35vw" }} />
					<div className="carousel-caption d-none d-md-block">
						<h5>{hotel.name}</h5>
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
PruebaCarousel2.propTypes = {
	urls: PropTypes.array
};
