import React from "react";

export const CardReviewUser = () => {
	return (
		<div>
			<div className="card mb-3" style={{ Width: "100px", height: "200px" }}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img
							className="img-fluid"
							src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Hotel Hilton Costa del Sol</h5>
							<p className="card-text">Especificaciones (1 habitacion, 2 personas, 1 baño etc)</p>
							<p className="card-text">
								<small className="text-muted">4,0 (20 reseñas)</small>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
