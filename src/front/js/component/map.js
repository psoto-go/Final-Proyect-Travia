// import React from "react";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// export const Map = withGoogleMap(props => <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />);

import React, { Component, useContext, useState, useEffect } from "react";
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
export const Map = props => {
	const center = {
		center: {
			lat: parseFloat(props.hotels[0].longitude),
			lng: parseFloat(props.hotels[0].latitude)
		},
		zoom: 12
	};

	return (
		// Important! Always set the container height explicitly

		<div className="mapPosition">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDaq_DXg5Oe1n6XQFUFMQu8EusN8NOXhZY" }} // api key hidden
				center={center.center}
				defaultZoom={center.zoom}
				yesIWantToUseGoogleMapApiInternals>
				{props.hotels
					? props.hotels.map((chinche, index) => {
							console.log(chinche, "@@");
							return <Pin text="blabla" key={index} lat={chinche.longitude} lng={chinche.latitude} />;
					  })
					: ""}
			</GoogleMapReact>
		</div>
	);
};

Pin.propTypes = {
	text: PropTypes.string
};

Map.propTypes = {
	hotels: PropTypes.object
};
