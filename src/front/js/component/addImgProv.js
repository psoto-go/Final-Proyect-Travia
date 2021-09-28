import React, { useState, useContext } from "react";

export const CarrouselProv = () => {
	const [files, setFiles] = useState(null);
	const [img, setImg] = useState(null);

	const uploadImage = evt => {
		evt.preventDefault();
		// we are about to send this to the backend.
		console.log("This are the files", files);
		let body = new FormData();
		body.append("profile_image", files[0]);
		const options = {
			body,
			method: "POST"
		};
		// you need to have the user_id in the localStorage
		const currentUserId = localStorage.getItem("user_id");
		fetch(`${process.env.BACKEND_URL}/api/city/${currentUserId}/image`, options)
			.then(resp => resp.json())
			.then(data => console.log("Success!!!!", data))
			.catch(erros => console.error("ERRORRRRRR!!!", error));
	};
	return (
		<div className="row hotelCarrousel">
			<div className="col-10">
				<div className="slider">
					<div className="slide">
						<div className="slide">
							<img
								className="imageHotel"
								src="https://images.daznservices.com/di/library/Goal_Argentina/86/5e/estadio-monumental-river-plate_15f3ygjfxe9ct1gtq50322fkgx.jpg?t=172937880&quality=100"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<button className="col-2 addImagenHotel">
				<h3>
					<i className="far fa-arrow-alt-circle-up" />
					<p>Añadir imagen</p>
				</h3>
				<input
					className="col-9"
					type="file"
					id="avatar"
					name="avatar"
					accept="image/png, image/jpeg"
					onChange={e => {
						setFiles(e.target.files);
					}}></input>
			</button>
		</div>
	);
};
