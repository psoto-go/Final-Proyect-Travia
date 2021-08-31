import React from "react";
import "../../styles/carrouselDash.scss";
import { Link } from "react-router-dom";

export const CarrouselDash = () => {
	return (
		<div>
			<div className="row cardgrouped">
				<div className="item-image">
					<img
						src="https://viajes.nationalgeographic.com.es/medio/2020/08/10/asturias-puente-de-cangas-de-onis_58cbd78f_2000x1333.jpg"
						alt=""
					/>
					<Link to="#">
						<h4 className="text-center">Asturias</h4>
					</Link>
				</div>

				<div className="item-image">
					<img
						src="https://content.skyscnr.com/m/5577c55a3ad9ebc6/original/spain-murcia-mazarron-port-harbour-gettyimages-477859398.jpg"
						alt=""
					/>
					<Link to="#">
						<h4 className="text-center">Murcia</h4>
					</Link>
				</div>

				<div className="item-image">
					<img src="https://www.laguiago.com/wp-content/uploads/2021/08/Mallorca-turismo-min.jpg" alt="" />
					<Link to="#">
						<h4 className="text-center">Mallorca</h4>
					</Link>
				</div>

				<div className="item-image">
					<img src="https://okdiario.com/img/2019/11/07/cuales-son-las-islas-canarias.jpg" alt="" />
					<Link to="#">
						<h4 className="text-center">Islas Canarias</h4>
					</Link>
				</div>
			</div>

			<div>
				<Link to="/adminProvincias">
					<h3 className="ml-1 ">Ciudades</h3>
				</Link>
			</div>
		</div>
	);
};
