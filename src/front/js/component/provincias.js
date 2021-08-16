import React from "react";
import "../../styles/provincias.scss";

export const Provincias = () => {
	return (
		<div>
			<div className="container3">
				<div className="item color-1">
					<img
						src="https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1586529185422-B9XBTSLKN3KFZDYBGKFI/que-ver-en-asturias-picos-portada.jpg?format=1500w"
						alt=""
					/>
					<h1>Asturias</h1>
				</div>
				<div className="item color-2">
					{" "}
					<img
						src="https://content.skyscnr.com/m/5577c55a3ad9ebc6/original/spain-murcia-mazarron-port-harbour-gettyimages-477859398.jpg"
						alt=""
					/>
					<h1>Murcia</h1>{" "}
				</div>
				<div className="item color-3">
					<img src="https://www.laguiago.com/wp-content/uploads/2021/08/Mallorca-turismo-min.jpg" alt="" />
					<h1>Mallorca</h1>
				</div>
				<div className="item color-4">
					{" "}
					<img
						src="https://elcomercio.pe/resizer/bdZZKqVOqqd1toX6ScVrJR17cb4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7WZMFBX2TJDZRORJAPC6ZRWLNA.jpg"
						alt=""
					/>
					<h1>Islas Canarias</h1>
				</div>
			</div>
		</div>
	);
};
