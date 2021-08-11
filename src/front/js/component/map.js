// import React from "react";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// export const Map = withGoogleMap(props => <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />);

import React from "react";
import GoogleMapReact from "google-map-react";

export const Map = () => {
	const center = {
		center: {
			lat: 40.58674240500642,
			lng: -82.2249773351358
		},
		zoom: 12
	};

	return (
		// Important! Always set the container height explicitly

		<div style={{ height: "500px", width: "500px" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyBOftjuA_Gb7vY8PSv8ExXEIW_CDCvRYMU" }} // api key hidden
				defaultCenter={center.center}
				defaultZoom={center.zoom}
				yesIWantToUseGoogleMapApiInternals
			/>
		</div>
	);
};
