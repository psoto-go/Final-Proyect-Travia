import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { api_url } from "../constants";
import { param } from "jquery";
import { List } from "../pages/list";

export const Search = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState({
		place: "",
		datein: "",
		dateout: "",
		number: ""
	});
	const [detalles, setDetalles] = useState();
	let history = useHistory();

	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};

	let params = new URLSearchParams();
	if (loginValue.place) {
		params.set("city", loginValue.place);
	}
	if (loginValue.number) {
		params.set("people", loginValue.number);
	}
	if (loginValue.datein) {
		params.set("start_date", loginValue.datein);
	}
	if (loginValue.dateout) {
		params.set("end_date", loginValue.dateout);
	}

	const submitForm = e => {
		e.preventDefault();
		fetch(api_url + "/api/hotels?" + params)
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
		actions.url(api_url + "/api/hotels?" + params);
		// <List data={detalles}></List>;
		history.push("/list?" + params);
	};
	console.log(detalles);

	return (
		<div id="searchBar">
			<div className="bgcolor-searchBar">
				<i className="fas fa-map-marker-alt textMargin" />
				<form className="form-signin" onSubmit={submitForm}>
					<input
						type="text"
						id="text"
						placeholder="¿A Donde Quieres Viajar?"
						name="place"
						onChange={changeInput}
					/>
					<div className="textMargin">Check-In</div>
					<input type="date" id="datein" name="datein" onChange={changeInput} />
					<div className="textMargin">Check-Out</div>
					<input type="date" id="dateout" name="dateout" onChange={changeInput} />
					<i className="fas fa-user-friends textMargin" />
					<input
						type="number"
						min="1"
						max="5"
						placeholder="0"
						id="number"
						name="number"
						onChange={changeInput}
					/>
					<button className="btn btn-warning btton" type="submit">
						Buscar
					</button>
				</form>
			</div>
		</div>
	);
};
