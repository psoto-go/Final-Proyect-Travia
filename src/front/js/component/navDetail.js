import React, { Component } from "react";
import "../../styles/index.scss";
export const NavDetail = () => {
	return (
		<>
			<ul className="nav nav-pills nav-fill">
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						General
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						Reseñas
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-dark" href="#">
						Politicas de reserva
					</a>
				</li>
				<li className="nav-item ">
					<a className=" rounded-pill bg-warning text-dark nav-link active" href="#">
						Disponibilidad y Tarifas
					</a>
				</li>
			</ul>
			<hr></hr>
			<div className="parraf">
				<h3>Descripcion</h3>
				<p>
					Ut tempus lobortis urna eu mattis. Donec semper ultricies ultricies. Suspendisse porttitor metus
					turpis, sed dictum turpis aliquam non. Phasellus eu porta sem. Vivamus cursus libero rhoncus,
					vehicula tortor ac, lacinia nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia curae; Donec placerat erat vel purus dignissim tempor.
				</p>
			</div>
		</>
	);
};
