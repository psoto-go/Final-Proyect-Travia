import React from "react";
import "../../styles/addCountry.scss";

export const AddCountry = () => {
	return (
		<div className="containerCountry">
			<div className="row ">
				<div className="col-4">
					<img
						className="imgCountry1 img-fluid"
						src="https://media.gettyimages.com/photos/hotel-w-barceloneta-barcelona-catalonia-spain-europe-picture-id1011856398?s=612x612"></img>
				</div>

				<div className="col-8">
					<div>
						<h3>Nombre de la ciudad</h3>

						<input
							type="text"
							className="form-control"
							placeholder=""
							aria-label=""
							aria-describedby="basic-addon1"
						/>
					</div>

					<div className="mt-3">
						<h3>Descripcion</h3>

						<textarea className="border" rows="9" style={{ width: "100%" }} />
					</div>
				</div>
			</div>
		</div>
	);
};
