import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { api_url } from "../constants";
import { param } from "jquery";
import { List } from "../pages/list";

export const SearchResponsive = () => {
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
		localStorage.setItem("start_date", loginValue.datein);
		localStorage.setItem("end_date", loginValue.dateout);
		// <List data={detalles}></List>;
		history.push("/list?" + params);
	};
	console.log(detalles);

	return (
		<div className="d-flex justify-content-center">
			<nav className="navbar navbar-light border border-light col-sm-6 rounded  d-block d-xl-none d-lg-block d-md-block mt-5 pb-3 pt-3 ">
				<form className="form-inline flex-column " onSubmit={submitForm}>
					<input
						type="text"
						id="text"
						placeholder="¿A Donde Viajas?"
						className="text-center"
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
						className="text-center"
						id="number"
						name="number"
						onChange={changeInput}
					/>
					<button className="btn btn-warning btn-lg" type="submit">
						Buscar
					</button>
				</form>
			</nav>
		</div>
	);
};
