import React, { Component, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Map } from "../component/map";
import { ChoiceHotel } from "../component/choiceHotel";
import { SearchList } from "../component/searchList";
import { api_url } from "../constants";

export const List = props => {
	// const [detalles, setDetalles] = useState();
	// useEffect(() => {
	// 	fetch(api_url + "/api/hotels?" + props.data)
	// 		.then(response => response.json())
	// 		.then(result => {
	// 			setHotels(result.response);
	// 		})
	// 		.catch(error => console.log("Error", error));
	// }, [props.data]);
	// const listHotels = props.data.map((hotel, index) => {
	// 	return <ChoiceHotel key={index} name={hotel.name}></ChoiceHotel>;
	// });
	// console.log(props.data);
	return (
		<>
			{" "}
			<div id="testing">
				<SearchList />
			</div>
			<div className="listHotels">{/* <div className="listHotels2">{listHotels}</div> */}</div>
			<div>
				<Map />
			</div>
		</>
	);
};
List.propTypes = {
	data: PropTypes.object
};
