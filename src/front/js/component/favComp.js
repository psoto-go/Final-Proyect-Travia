import React from "react";
import { Link } from "react-router-dom";
import "../../styles/favComp.scss";
export const FavComp = () => {
	return (
		<div className=" container text-center my-3 favComp">
			<div className="row">
				<div className="col-6 p-0 mt-1">
					<Link>
						<img
							className="favBox rounded-left"
							src="https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg"></img>
					</Link>
				</div>
				<div className="col-6">
					<Link>
						<img
							className="img-fluid my-1 rounded-bottom"
							src="https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg"
						/>
					</Link>

					<Link>
						<img
							className="img-fluid rounded-top"
							src="https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg"
						/>
					</Link>
				</div>
			</div>
			<h1>Murcia</h1>
		</div>
	);
};
