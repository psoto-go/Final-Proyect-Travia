import React from "react";

export const Hoteles = () => {
	return (
		<>
			<h3>Hoteles</h3>
			<div className="card-group">
				<div className="card">
					<img
						src={
							"https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/693/693_palmariva-eretria-hotel_99124.jpeg?w=256&h=256&mode=crop"
						}
						className="card-img-top"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src={"https://mythicvalley.gr/wp-content/uploads/2018/06/kalliopi-4.jpg"}
						className="card-img-top"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This card has supporting text below as a natural lead-in to additional content.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src={
							"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/68/96681_v6.jpeg"
						}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
