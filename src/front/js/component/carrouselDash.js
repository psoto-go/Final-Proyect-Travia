import React from "react";
import "../../styles/carrouselDash.scss";
import { Link } from "react-router-dom";

export const CarrouselDash = () => {
	return (
		<div>
			<div className="row provdash">
				<div className="prov col-3">
					<div className="item-image">
						<img
							src="https://viajes.nationalgeographic.com.es/medio/2020/08/10/asturias-puente-de-cangas-de-onis_58cbd78f_2000x1333.jpg"
							alt=""
						/>
						<Link to="#">
							<h3>Asturias</h3>
						</Link>
					</div>
					<div className="item-content" />
				</div>
				<div className="prov col-3">
					<div className="item-image">
						<img
							src="https://content.skyscnr.com/m/5577c55a3ad9ebc6/original/spain-murcia-mazarron-port-harbour-gettyimages-477859398.jpg"
							alt=""
						/>
						<Link to="#">
							<h3>Murcia</h3>
						</Link>
					</div>
					<div className="item-content" />
				</div>
				<div className="prov col-3">
					<div className="item-image">
						<img
							src="https://www.laguiago.com/wp-content/uploads/2021/08/Mallorca-turismo-min.jpg"
							alt=""
						/>
						<Link to="#">
							<h3>Mallorca</h3>
						</Link>
					</div>
					<div className="item-content" />
				</div>
				<div className="prov col-3">
					<div className="item-image">
						<img
							src="https://mindfultravelbysara.com/wp-content/uploads/2014/12/las-islas-canarias.jpg"
							alt=""
						/>
						<Link to="#">
							<h3>Islas Canarias</h3>
						</Link>
					</div>
					<div />
				</div>
			</div>
			<div>
				<Link to="/adminProvincias">
					<Link to="/adminProvincias">
						<h2 className="mt-5 titulo">Ciudades</h2>
					</Link>
				</Link>
			</div>
		</div>
	);
};
