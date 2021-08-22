import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";
import { Featured } from "./featured";

export const Destinations = () => {
	const [detalles, setDetalles] = useState();

	useEffect(() => {
		fetch(api_url + "/api/cities")
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);
	return (
		<>
			<div className="lugares">
				<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
					{detalles
						? detalles.map((item, index) => {
								return (
									<li key={index} className="nav-item" role="presentation">
										<a
											className={index != 0 ? "nav-link" : "nav-link active"}
											id={`pills-${detalles[index].id}-tab`}
											data-toggle="pill"
											href={`#pills-${detalles[index].id}`}
											role="tab"
											aria-controls={`pills-${detalles[index].id}`}
											aria-selected={index != 0 ? "false" : "true"}>
											{detalles[index].name}
										</a>
									</li>
								);
						  })
						: "adsfa"}
				</ul>
			</div>
			<div className="tab-content" id="pills-tabContent">
				{detalles
					? detalles.map((item, index) => {
							return (
								<div
									key={index}
									className={index != 0 ? "tab-pane fade" : "tab-pane fade show active"}
									id={`pills-${detalles[index].id}`}
									role="tabpanel"
									aria-labelledby={`pills-${detalles[index].id}-tab`}>
									<div className="imgRedonda">
										<img src={detalles[index].url} alt="..." />
									</div>
									<div>
										<div className="card-body positionText">
											<h5 className="card-title p-3 ml-5">{detalles[index].name}</h5>
											<p className="card-text ml-8">{detalles[index].description}</p>
										</div>
									</div>
									{detalles[index].hotels
										? detalles[index].hotels.map((item, indexa) => {
												return (
													<Featured
														key={indexa}
														name={detalles[index].hotels[indexa].name}
														url={detalles[index].hotels[indexa].HotelArchives[0].url}
														city_id={detalles[index].name}
													/>
												);
										  })
										: "adsfa"}
								</div>
							);
					  })
					: "adsfa"}
			</div>
		</>
	);
};
