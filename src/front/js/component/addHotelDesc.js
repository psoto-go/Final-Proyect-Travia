import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/addHotelDesc.scss";
import { api_url } from "../constants";
import { ButtonService } from "./buttonService";

export const AddHotelDesc = () => {
	const [loginValue, setLoginValue] = useState({
		name: "",
		description: "",
		longitude: "",
		latitude: "",
		favorite: "False",
		city_id: "",
		services: [],
		rooms: []
	});
	const [service, setService] = useState({
		name: ""
	});
	const [cities, setCities] = useState();
	const { store, actions } = useContext(Context);
	let history = useHistory();

	useEffect(() => {
		fetch(api_url + "/api/cities")
			.then(response => response.json())
			.then(result => {
				setCities(result.response);
			})
			.catch(error => console.log("Error", error));
	}, []);

	useEffect(() => {
		actions.getService();
	}, []);

	const changeInput = e => {
		setLoginValue({
			...loginValue,
			[e.target.name]: e.target.name != "favorite" ? e.target.value : JSON.parse(e.target.value)
		});
	};

	const changeInputService = e => {
		setService({
			...service,
			[e.target.name]: e.target.value
		});
	};

	const submitForm = e => {
		e.preventDefault();
		actions.newHotel(loginValue);
		// history.push("/adminHoteles");
	};
	const submitFormService = e => {
		e.preventDefault();
		actions.newService(service);
	};

	console.log(cities);

	return (
		<form onSubmit={submitForm}>
			<div className="row descHotel1">
				<div className="col-7">
					<div className="row">
						<div className="col-4 contentDivRoom">
							<p>
								<strong>Nombre del Hotel</strong>
							</p>
							<div className="input-group mb-3">
								<div className="input-group-prepend" />
								<input
									type="text"
									className="form-control"
									placeholder="Hilton Costa del sol"
									aria-label="Username"
									aria-describedby="basic-addon1"
									name="name"
									onChange={changeInput}
								/>
							</div>
						</div>
						<div className="col-2">
							<p>
								<strong>Longitud</strong>
							</p>
							<div className="input-group mb-3">
								<div className="input-group-prepend" />
								<input
									type="text"
									className="form-control"
									aria-label="Username"
									aria-describedby="basic-addon1"
									name="longitude"
									onChange={changeInput}
								/>
							</div>
						</div>
						<div className="col-2">
							<p>
								<strong>Latitud</strong>
							</p>
							<div className="input-group mb-3">
								<div className="input-group-prepend" />
								<input
									type="text"
									className="form-control"
									aria-label="Username"
									aria-describedby="basic-addon1"
									name="latitude"
									onChange={changeInput}
								/>
							</div>
						</div>
						<div className="col-2">
							<p>
								<strong>Ciudad</strong>
							</p>
							<div className="input-group mb-3">
								<select
									className="custom-select"
									id="inputGroupSelect01"
									name="city_id"
									onChange={changeInput}>
									<option selected>Elige</option>
									{cities
										? cities.map((item, index) => {
												return (
													<option key={index} value={item.id}>
														{item.name}
													</option>
												);
										  })
										: ""}
								</select>
							</div>
						</div>
						<div className="col-1" onChange={changeInput}>
							<p>
								<strong>??Favorito?</strong>
							</p>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="favorite"
									id="exampleRadios1"
									value={true}
								/>
								<label className="form-check-label" htmlFor="exampleRadios1">
									Si
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="favorite"
									id="exampleRadios1"
									value={false}
								/>
								<label className="form-check-label" htmlFor="exampleRadios1">
									No
								</label>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-8">
							<strong>A??adir servicio</strong>

							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Nombre del servicio"
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
									name="name"
									onChange={changeInputService}
								/>
								<div className="input-group-append">
									<button
										className="btn btn-outline-secondary"
										type="button"
										onClick={submitFormService}>
										A??adir
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-8">
							<strong>Servicios del Hotel</strong>
						</div>
						{/* <div className="col-4">
							A??adir servicios{" "}
							<button className="add rounded-circle text-center ">
								<i className="fas fa-award" />
							</button>
						</div> */}
					</div>
					<div className="row serviceRoom2">
						{store.services.length > 0
							? store.services.map((item, index) => {
									return (
										<ButtonService
											key={index}
											name={item.name}
											callback={() => {
												setLoginValue({
													...loginValue,
													services: [...loginValue.services, item.id]
												});
											}}
										/>
									);
							  })
							: ""}
					</div>
				</div>
				<div className="col-5 descHotel">
					<p>
						<strong>Descripcion</strong>
					</p>
					<div className="input-group">
						<textarea
							className="form-control formDesc"
							aria-label="With textarea"
							placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida massa ac varius malesuada
						gravida pellentesque augue. Diam risus neque sodales morbi lectus sit pellentesque. Vestibulum,
						lorem suspendisse enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida massa
						ac varius malesuada gravida pellentesque augue. Diam risus neque sodales morbi lectus sit
						pellentesque. Vestibulum, lorem suspendisse enim."
							name="description"
							onChange={changeInput}></textarea>
					</div>

					<div className="btn-group-toggle pt-5 pl-2" data-toggle="buttons">
						<button className="btn btnServiceOff">Cancelar</button>
						<button type="submit" className="btn btn-success">
							Guardar
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};
