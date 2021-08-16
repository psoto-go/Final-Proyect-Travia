import React from "react";

export const Destacados = () => {
	return (
		<>
			<div className="card" style={{ width: "500px" }}>
				<div className="row no-gutters">
					<div className="col-sm-5">
						<img
							style={{ width: "300px", borderRadius: "50px" }}
							className="card-img"
							src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
							alt="Jacuzzi"
						/>
					</div>
					<div className="col-sm-7">
						<div className="card-body">
							<a href="#" className="btn btn-primary">
								More
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};