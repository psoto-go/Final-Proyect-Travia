import React from "react";
import { Link, Button } from "react-router-dom";

export const Carrousel = () => {
	return (
		<>
			<div className="item-image ">
				<div className="row text-center">
					<div className="card" style={{ width: "840px" }}>
						<img src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg" />
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
					</div>
					<div className="card " style={{ width: "840px" }}>
						<img src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg" />
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
