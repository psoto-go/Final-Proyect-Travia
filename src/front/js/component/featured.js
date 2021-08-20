import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";

export const Featured = () => {
	const [detalles, setDetalles] = useState();

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
		<>
			{detalles
				? detalles.map((item, index) => {
						return (
							<div key={index} className="inline-div">
								<div className="hotel-item">
									<div>
										<div className="col-sm-5">
											<img
												style={{ width: "300px", borderRadius: "50px" }}
												className="card-img"
												src={detalles[index].HotelArchives[0].url}
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
									<h5 className="card-title">{detalles[index].name}</h5>
									<p className="card-text">{detalles[index].description}</p>
								</div>
							</div>
						);
				  })
				: "loading"}
		</>
	);
};
