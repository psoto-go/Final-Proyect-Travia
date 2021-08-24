import React, { Component } from "react";

import "../../styles/index.scss";
import PropTypes from "prop-types";

export const Gallery = props => {
	return (
		<div className="galleryView ">
			<h2>Gallery</h2>
			<div className="row my-5">
				<img src={props.urls[0]} className="col-6" />
				<div>
					<img src={props.urls[1]} className="col " />
					<img src={props.urls[2]} className="col " />
				</div>
				<div>
					<img src={props.urls[3]} className="col  " />
					<img src={props.urls[3]} className="col " />
				</div>
			</div>
		</div>
	);
};

Gallery.propTypes = {
	urls: PropTypes.array
};
