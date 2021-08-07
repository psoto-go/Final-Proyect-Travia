import React from "react";
import { Link, Button } from "react-router-dom";
import { Carrousel } from "./carrousel";

export const Cities = () => {
	return (
		<div>
			<nav>
				<div className="nav nav-tabs" id="nav-tab" role="tablist">
					<a
						className="nav-link active"
						id="nav-home-tab"
						data-toggle="tab"
						href="#nav-home"
						role="tab"
						aria-controls="nav-home"
						aria-selected="true">
						Home
					</a>
					<a
						className="nav-link"
						id="nav-profile-tab"
						data-toggle="tab"
						href="#nav-profile"
						role="tab"
						aria-controls="nav-profile"
						aria-selected="false">
						Profile
					</a>
					<a
						className="nav-link"
						id="nav-contact-tab"
						data-toggle="tab"
						href="#nav-contact"
						role="tab"
						aria-controls="nav-contact"
						aria-selected="false">
						Contact
					</a>
				</div>
			</nav>
			<div className="tab-content" id="nav-tabContent">
				<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
					..sdfasdfasdfasdf.
				</div>
				<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
					adsfadsfadsfadsf
				</div>
				<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
					.adsfadsfasdf..
				</div>
			</div>
		</div>
	);
};
