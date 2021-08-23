import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { api_url } from "../constants";

export const Search = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);
	const [detalles, setDetalles] = useState();
	let history = useHistory();

	const firstValue = {
		place: "",
		datein: "",
		dateout: "",
		number: ""
	};
	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};

	const submitForm = e => {
		e.preventDefault();
		fetch(
			api_url +
				"/api/hotels?" +
				new URLSearchParams({
					city_id: loginValue.place
				})
		)
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	};
	console.log(detalles);
	// {
	// 	alert(
	// 		"sitio = " +
	// 			loginValue.place +
	// 			"\n" +
	// 			"inicio = " +
	// 			loginValue.datein +
	// 			"\n" +
	// 			"fin = " +
	// 			loginValue.dateout +
	// 			"\n" +
	// 			"personas = " +
	// 			loginValue.number
	// 	);
	// 	console.log(loginValue);
	// 	history.push("/list");
	// }

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
