import React from "react";
import "../../styles/addCountry.scss";

export const AddCountry = () => {
	return (
		<div className="containerCountry">
			<div className="row d-flex justify-content-center">
				<div className="col-4">
					<img
						className="imgCountry1 img-fluid mx-auto d-block "
						src="https://static.hosteltur.com/app/public/uploads/img/articles/2020/07/24/L_075644_img-1347.jpg"></img>
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
