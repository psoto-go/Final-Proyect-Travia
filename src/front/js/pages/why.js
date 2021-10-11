import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import logo from "../../img/golondrina.png";
import facebook from "../../img/facebooklogo.jpg";
import google from "../../img/googlelogo.png";
import apple from "../../img/apple.png";
import hacemosCaminoImg1 from "../../img/hacemosCaminoImg1.png";
import hacemosCaminoImg2 from "../../img/hacemosCaminoImg2.png";
import hacemosCaminoImg3 from "../../img/hacemosCaminoImg3.png";
import "../../styles/quehacemos.scss";

export const Why = () => {
	return (
		<>
			<body className="quehacemos container-fluid mb-5">
				<header className="headerHacemos" id="headerInicio">
					<article className="headerHacemosImg">
						<div className="container divTextoHeader">
							<div className="row divContainerHeader">
								<div className="mt-5 col-sm-8 col-lg-8 justify-content-center">
									<div className="titulosHacemos mt-5">
										<h1 className="titulo">Viaja con tu oficina y la de tu equipo</h1>
										<strong>
											<p className="bajada subtitulo">Trabaja y viaja al mismo tiempo</p>
										</strong>
									</div>
									<div className="containerParrafoBotonHeader">
										<p className="p--2">
											Trabaja con tu equipo presencialmente en hubs diseñados para impulsar la
											productividad
										</p>

										<button className="btn btn-warning">Conoce más</button>
									</div>
								</div>
							</div>
						</div>
					</article>
				</header>

				<section className="container camino">
					<div className="row fondoCamino1 hacemosCamino justify-content-center">
						<div className="col-8 col-sm-8 col-md-8 col-lg-5 col-xl-5">
							<img src={hacemosCaminoImg3} alt="Imagen de reunión por videollamada" />
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
						<div className="col-8 col-sm-8 col-md-8 col-lg-5 col-xl-5">
							<img src={hacemosCaminoImg2} alt="Imagen de logros, conquistar objetivos" />
						</div>
					</div>
					<div className="row fondoCamino2 hacemosCamino camino-2-mobile justify-content-center">
						<div className="col-lg-4 fondoCaminoTxt2">
							<div className="col-lg-4">
								<img
									src="../../img/hacemosCaminoImg2.svg"
									alt="Imagen de logros, conquistar objetivos"
								/>
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
						<div className="col-8 col-sm-8 col-md-8 col-lg-5 col-xl-5">
							<img src={hacemosCaminoImg1} alt="Imagen de dos personas dándose la mano, negocios" />
						</div>
						<div className="col-lg-2 scrollCirculo">
							<div className="scrollCirculoFinal"></div>
						</div>
						<div className="col-lg-4 fondoCaminoTxt3">
							<h3>Atención 24HS</h3>
							<p className="p--2">
								Una vez cerrado y cordado el presupuesto y nuestros servicios, disfruta de la
								experiencia Travia con la mejor atención 24h para resolver cualquier necesidad.
							</p>
						</div>
					</div>
				</section>
			</body>
		</>
	);
};
