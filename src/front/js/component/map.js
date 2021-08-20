// import React from "react";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// export const Map = withGoogleMap(props => <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />);

import React from "react";
import GoogleMapReact from "google-map-react";
import Chinchetas from "./chinchetas.json";
import PropTypes from "prop-types";

const Pin = ({ text }) => (
	<img
		style={{
			textAlign: "center",
			transform: "translate(-50%, -50%)",
			position: "absolute",
			height: "3em",
			width: "2em"
		}}
		src={"http://www.clker.com/cliparts/e/3/F/I/0/A/google-maps-marker-for-residencelamontagne-hi.png"}
		alt={text}
	/>
);
export const Map = () => {
	const center = {
		center: {
			lat: -34.5453018,
			lng: -58.4519689
		},
		zoom: 12
	};

	return (
		// Important! Always set the container height explicitly

		<div className="mapPosition">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDaq_DXg5Oe1n6XQFUFMQu8EusN8NOXhZY" }} // api key hidden
				defaultCenter={center.center}
				defaultZoom={center.zoom}
				yesIWantToUseGoogleMapApiInternals>
				{Chinchetas.features.map(chinche => {
					console.log(chinche.geometry.coordinates[0]);
					return (
						<Pin
							text="blabla"
							key={chinche.properties.PARK_ID}
							lat={chinche.geometry.coordinates[0]}
							lng={chinche.geometry.coordinates[1]}
						/>
					);
				})}
			</GoogleMapReact>
		</div>
	);
};

Pin.propTypes = {
	text: PropTypes.string
};
