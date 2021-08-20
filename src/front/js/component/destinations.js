import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { api_url } from "../constants";

import { Featured } from "./featured";
export const Destinations = () => {
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
			<div className="lugares">
				<ul className="nav nav-tabs " role="tablist">
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
			</div>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="Asturias" role="tabpanel" aria-labelledby="asturias-tab">
					<div className="imgRedonda">
						<img
							src="https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1586529185422-B9XBTSLKN3KFZDYBGKFI/que-ver-en-asturias-picos-portada.jpg?format=1500w"
							alt="..."
						/>
					</div>
					<div>
						<div className="card-body positionText">
							<h5 className="card-title p-3 ml-5">Belmonte de Miranda</h5>
							<p className="card-text ml-8">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								is simply dummy text of the printing and typesetting industry.
							</p>
						</div>
					</div>
					<Featured />
				</div>
				<div className="tab-pane fade" id="Murcia" role="tabpanel" aria-labelledby="murcia-tab">
					...asdfasdfasdfa
				</div>
				<div className="tab-pane fade" id="Mallorca" role="tabpanel" aria-labelledby="mallorca-tab">
					..aa.
				</div>
				<div className="tab-pane fade" id="Canarias" role="tabpanel" aria-labelledby="canarias-tab">
					..aa.
				</div>
			</div>
		</>
	);
};
