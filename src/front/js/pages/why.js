import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import logo from "../../img/golondrina.png";
import facebook from "../../img/facebooklogo.jpg";
import google from "../../img/googlelogo.png";
import apple from "../../img/apple.png";
import "../../styles/quehacemos.scss";

export const why = () => {
	return (
		<body className="quehacemos container-fluid">
			<header className="headerHacemos" id="headerInicio">
				<article className="headerHacemosImg">
					<nav className="navbar navbar-expand-lg navbar-light">
						<div className="container-fluid">
							<a className="navbar-brand" href="index.html">
								<img
									src="img/golondrina0.png"
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="Logo de Travia"
								/>
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNavDropdown"
								aria-controls="navbarNavDropdown"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse containerNavHeader" id="navbarNavDropdown">
								<ul className="navbar-nav">
									<li className="nav-item">
										<a className="navLink " href="index.html">
											Inicio
										</a>
									</li>
									<li className="nav-item">
										<a className="navLink" href="quienessomos.html">
											Quienes Somos
										</a>
									</li>
									<li className="nav-item">
										<a className="navLink inicioNavBar" aria-current="page" href="quehacemos.html">
											Que hacemos
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="navLink dropdown-toggle"
											href="#"
											id="navbarDropdownMenuLink"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											Destinos
										</a>
										<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
											<li>
												<a className="dropdown-item navLinkB" href="asturias.html">
													Asturias
												</a>
											</li>
											<li>
												<a className="dropdown-item navLinkB" href="Mallorca.html">
													Mallorca
												</a>
											</li>
											<li>
												<a className="dropdown-item navLinkB" href="Mallorca.html">
													Murcia
												</a>
											</li>
											<li>
												<a className="dropdown-item navLinkB" href="canarias.html">
													Islas Canarias
												</a>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a className="navLink" href="#">
											Contacto
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<div className="container divTextoHeader">
						<div className="row divContainerHeader">
							<div className="col-sm-8 col-lg-6 justify-content-center">
								<div className="titulosHacemos">
									<h1>Viaja con tu oficina y la de tu equipo</h1>
									<p className="bajada">Trabaja y viaja al mismo tiempo</p>
								</div>
								<div className="containerParrafoBotonHeader">
									<p className="p--2">
										Trabaja con tu equipo presencialmente en hubs diseñados para impulsar la
										productividad
									</p>
									<button className="btn btn-intro">Conoce más</button>
								</div>
							</div>
						</div>
					</div>
				</article>
			</header>

			<a href="#" className="btn-subir hidden">
				<svg
					className="btn-subir--svg"
					width="9rem"
					height="9rem"
					viewBox="0 0 92 92"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_d)">
						<circle cx="44" cy="44" r="39" fill="white" />
						<circle cx="44" cy="44" r="38" stroke="#798BF2" strokeWidth="2" />
					</g>
					<path
						d="M45.7096 61H41.2904V34.4848L29.1376 46.6376L26 43.5L43.5 26L61 43.5L57.8624 46.6376L45.7096 34.4848V61Z"
						fill="#798BF2"
					/>
					<defs>
						<filter
							id="filter0_d"
							x="0"
							y="0"
							width="92"
							height="92"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="2" dy="2" />
							<feGaussianBlur stdDeviation="3.5" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
						</filter>
					</defs>
				</svg>
			</a>

			<section className="container camino">
				<div className="row fondoCamino1 hacemosCamino justify-content-center">
					<div className="col-lg-4">
						<img src="img/hacemosCaminoImg3.svg" alt="Imagen de reunión por videollamada" />
					</div>
					<div className="col-lg-2 scrollCirculo">
						<div className="scrollCirculoInicio"></div>
					</div>
					<div className="col-lg-4 fondoCaminoTxt1">
						<h3>Contáctanos</h3>
						<p className="p--2">
							Conerta una videollamada con nosotros y cuéntanos cómo debe ser tu viaje perfecto...
						</p>
					</div>
				</div>
				<div className="row justify-content-center scrollCamino">
					<div className="col scrollCamino">
						<div className="mx-auto d-block scrollLinea"></div>
					</div>
				</div>
				<div className="row fondoCamino2 hacemosCamino camino-2 justify-content-center">
					<div className="col-lg-4 fondoCaminoTxt2">
						<h3>Presupuesto</h3>
						<p className="p--2">
							Nosotros te ofreceremos varios presupuestos al detalle que se ajusten a todas tus
							necesidades de la mano de los servicios de nuestros mejores.
						</p>
					</div>
					<div className="col-lg-2 scrollCirculo">
						<div className="scrollCirculoMedio"></div>
					</div>
					<div className="col-lg-4">
						<img src="img/hacemosCaminoImg2.svg" alt="Imagen de logros, conquistar objetivos" />
					</div>
				</div>
				<div className="row fondoCamino2 hacemosCamino camino-2-mobile justify-content-center">
					<div className="col-lg-4 fondoCaminoTxt2">
						<div className="col-lg-4">
							<img src="img/hacemosCaminoImg2.svg" alt="Imagen de logros, conquistar objetivos" />
						</div>
						<h3>Presupuesto</h3>
						<p className="p--2">
							Nosotros te ofreceremos varios presupuestos al detalle que se ajusten a todas tus
							necesidades de la mano de los servicios de nuestros mejores.
						</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col scrollCamino">
						<div className="mx-auto d-block scrollLinea"></div>
					</div>
				</div>
				<div className="row fondoCamino3 hacemosCamino justify-content-center">
					<div className="col-lg-4">
						<img
							src="../img/hacemosCaminoImg1.svg"
							alt="Imagen de dos personas dándose la mano, negocios"
						/>
					</div>
					<div className="col-lg-2 scrollCirculo">
						<div className="scrollCirculoFinal"></div>
					</div>
					<div className="col-lg-4 fondoCaminoTxt3">
						<h3>Atención 24HS</h3>
						<p className="p--2">
							Una vez cerrado y cordado el presupuesto y nuestros servicios, disfruta de la experiencia
							Travia con la mejor atención 24h para resolver cualquier necesidad.
						</p>
					</div>
				</div>
			</section>

			<section className="container-fluid call-to-action">
				<div className="container">
					<div className="row callTxt justify-content-center">
						<div className="col-lg-8 col-sm-12 text-center">
							<h2>Lorem ipsum lorem </h2>
							<p className="p--4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida turpis ut sed pulvinar
								aliquet quis faucibus id duis. Lacus, ac, ut odio velit feugiat.
							</p>
							<button className="btn btn-intro">Programar llamada</button>
						</div>
					</div>
				</div>
			</section>
		</body>
	);
};
