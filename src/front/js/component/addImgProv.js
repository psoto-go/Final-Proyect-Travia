import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const CarrouselProv = () => {
	const { store, actions } = useContext(Context);
	const [files, setFiles] = useState([]);
	const [imgData, setImgData] = useState([]);
	const onChangePicture = e => {
		if (e.target.files[0]) {
			actions.addfiles(e.target.files[0]);
			setFiles([...files, e.target.files[0]]);
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setImgData([...imgData, reader.result]);
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	};

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
		fetch(`${process.env.BACKEND_URL}/user/${currentUserId}/image`, options)
			.then(resp => resp.json())
			.then(data => console.log("Success!!!!", data))
			.catch(erros => console.error("ERRORRRRRR!!!", error));
	};
	return (
		<div className="row hotelCarrousel">
			<div className="col-10">
				<div className="slider">
					<div className="">
						{files.map((item, index) => {
							return (
								<div className="slide" key={index}>
									<img className="imageHotel" src={imgData[index]} alt="" />
								</div>
							);
						})}
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
						onChangePicture(e);
					}}></input>
			</button>
		</div>
	);
};
