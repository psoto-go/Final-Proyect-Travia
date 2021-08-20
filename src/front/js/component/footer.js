import React, { Component } from "react";
import "../../styles/footer.scss";
import golon from "../../img/golonnnn.png";

export const Footer = () => (
	<footer className=" footerFondo container-fluid text-center">
		<article className="row">
			<div className="col-md-12 col-xl-12 col-lg-12">
				<img src={golon} alt="243" />
			</div>
		</article>
		<article className="row text-center">
			<div className="align-content-center col-md-12 col-xl-12 col-lg-12">
				<a href="#">
					<i className="rrss fab fa-linkedin" />
				</a>
				<a href="#">
					<i className="rrss fab fa-instagram" />
				</a>
				<a href="#">
					<i className="rrss fab fa-facebook-square" />
				</a>
				<a href="#">
					<i className="rrss fab fa-pinterest" />
				</a>
			</div>
		</article>
		<article className="row">
			<div className="footerLink col-md-12 col-xl-12 col-lg-12 text-center">
				<ul className="footerLink--1">
					<li>
						<a href="#">Inicio</a>
					</li>
					<li>
						<a href="#" id="page-current" aria-current="page">
							Quienes Somos
						</a>
					</li>
					<li>
						<a href="#">Que hacemos</a>
					</li>
					<li>
						<a href="#">Destinos</a>
					</li>
					<li>
						<a href="#">Contacto</a>
					</li>
				</ul>
			</div>
		</article>
		<p className="text-light text-center mt-5 mb-3">Todos los derechos reservados Copyright (2021) - Travia.es™</p>
	</footer>
);
