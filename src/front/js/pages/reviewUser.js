import React from "react";
import { CardReviewUser } from "../component/cardReviewUser";
import { ReviewService } from "../component/reviewService";

export const ReviewsUser = () => {
	return (
		<div className="m-5">
			<h1 className="ml-5 mb-3">lorem impsum</h1>
			<div className="row">
				<div className="col-8">
					<CardReviewUser />
				</div>
				<div className="col-4">
					<ReviewService />
					<h5 className="mt-5">Actividades / adicional #1</h5>
					<textarea className="border" style={{ height: "10em", width: "100%" }}></textarea>
					<div className="row justify-content-end mt-3 mt-5">
						<button className="btn btn-dark">Cancelar</button>{" "}
						<button className="btn btn-success">Guardar</button>
					</div>
				</div>
			</div>
		</div>
	);
};
