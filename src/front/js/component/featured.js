import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";

export const Featured = () => {
	const [detalles, setDetalles] = useState([]);

	useEffect(() => {
		fetch("https://3001-peach-bear-cn1jkr6r.ws-eu16.gitpod.io/api/featuredhotels")
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);

				console.log("hotellaaa");
			})
			.catch(error => console.log("Error", error));
	}, []);
	console.log(detalles);

	return (
		<div className="inline-div">
			<div className="hotel-item">
				<div>
					<div className="col-sm-5">
						<img
							style={{ width: "300px", borderRadius: "50px" }}
							className="card-img"
							src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
							alt="Jacuzzi"
						/>
					</div>
					<div className="col-sm-7">
						<div className="card-body posiFeat">
							<a href="#" className="btn btn-primary">
								More
							</a>
						</div>
					</div>
				</div>
				<h5 className="card-title">{}</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
			</div>
			<div className="hotel-item">
				<div>
					<div className="col-sm-5">
						<img
							style={{ width: "300px", borderRadius: "50px" }}
							className="card-img"
							src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
							alt="Jacuzzi"
						/>
					</div>
					<div className="col-sm-7">
						<div className="card-body posiFeat">
							<a href="#" className="btn btn-primary">
								More
							</a>
						</div>
					</div>
				</div>
				<h5 className="card-title">Loren Ipsum</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
			</div>
			<div className="hotel-item">
				<div>
					<div className="col-sm-5">
						<img
							style={{ width: "300px", borderRadius: "50px" }}
							className="card-img"
							src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
							alt="Jacuzzi"
						/>
					</div>
					<div className="col-sm-7 ">
						<div className="card-body posiFeat">
							<a href="#" className="btn btn-primary">
								More
							</a>
						</div>
					</div>
				</div>
				<h5 className="card-title">Loren Ipsum</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
			</div>
		</div>
	);
};
