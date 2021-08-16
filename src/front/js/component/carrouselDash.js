import React from "react";
import "../../styles/carrouselDash.scss";

export const CarrouselDash = () => {
	return (
		<div>
			<div className="row">
				<div className="col-3">
					<div className="item-image">
						<img
							src="https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1586529185422-B9XBTSLKN3KFZDYBGKFI/que-ver-en-asturias-picos-portada.jpg?format=1500w"
							alt=""
						/>
						<h3>Asturias</h3>
					</div>
					<div className="item-content" />
				</div>
				<div className="col-3">
					<div className="item-image">
						<img
							src="https://content.skyscnr.com/m/5577c55a3ad9ebc6/original/spain-murcia-mazarron-port-harbour-gettyimages-477859398.jpg"
							alt=""
						/>
						<h3>Murcia</h3>
					</div>
					<div className="item-content" />
				</div>
				<div className="col-3">
					<div className="item-image">
						<img
							src="https://www.laguiago.com/wp-content/uploads/2021/08/Mallorca-turismo-min.jpg"
							alt=""
						/>
						<h3>Mallorca</h3>
					</div>
					<div className="item-content" />
				</div>
				<div className="col-3">
					<div className="item-image">
						<img
							src="https://elcomercio.pe/resizer/bdZZKqVOqqd1toX6ScVrJR17cb4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7WZMFBX2TJDZRORJAPC6ZRWLNA.jpg"
							alt=""
						/>
						<h3>Islas Canarias</h3>
					</div>
					<div />
				</div>
			</div>
			<h2>Ciudades</h2>
		</div>
	);
};
