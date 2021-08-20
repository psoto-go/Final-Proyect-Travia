import React, { Component } from "react";
import "../../styles/index.scss";
export const Gallery = () => {
	return (
		<div className="galleryView">
			<h2>Gallery</h2>
			<div className="row">
				<img
					src={"https://www.hotelescenter.es/wp-content/blogs.dir/1601/files/home//DSC6070-HDR-HBC-Hab-1.jpg"}
					className="col-6"
				/>
				<div>
					<img
						src={
							"https://www.hotelescenter.es/wp-content/blogs.dir/1601/files/home//DSC6070-HDR-HBC-Hab-1.jpg"
						}
						className="col "
					/>
					<img
						src={
							"https://www.hotelescenter.es/wp-content/blogs.dir/1601/files/home//DSC6070-HDR-HBC-Hab-1.jpg"
						}
						className="col "
					/>
				</div>
				<div>
					<img
						src={
							"https://www.hotelescenter.es/wp-content/blogs.dir/1601/files/home//DSC6070-HDR-HBC-Hab-1.jpg"
						}
						className="col "
					/>
					<img
						src={
							"https://www.hotelescenter.es/wp-content/blogs.dir/1601/files/home//DSC6070-HDR-HBC-Hab-1.jpg"
						}
						className="col "
					/>
				</div>
			</div>
		</div>
	);
};
