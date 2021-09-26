import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/addHotelDesc.scss";
import { api_url } from "../constants";
import { ButtonService } from "./buttonService";

export const AddProvDesc = () => {
	const [loginValue, setLoginValue] = useState({
		name: "",
		description: "",
		url: ""
	});
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const changeInput = e => {
		setLoginValue({
			...loginValue,
			[e.target.name]: e.target.value
		});
	};

	const submitForm = e => {
		e.preventDefault();
		actions.newCitie(loginValue);
		history.push("/adminProvincias");
	};

	return (
		<form onSubmit={submitForm}>
			<div className="row descHotel1">
				<div className="col contentDivRoom">
					<p>
						<strong>Nombre de la provincia</strong>
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

				<div className="col descHotel">
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
