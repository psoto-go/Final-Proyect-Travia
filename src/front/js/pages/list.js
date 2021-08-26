import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { api_url } from "../constants";
import { param } from "jquery";
import { Map } from "../component/map";
import { ChoiceHotel } from "../component/choiceHotel";
import { SearchList } from "../component/searchList";
import { Search } from "../component/search";

export const List = () => {
	let params = new URLSearchParams();
	let city_id = params.get("city_id");
	let start_date = params.get("start_date");
	console.log(city_id);
	return (
		<>
			{" "}
			<div id="testing">
				<div className="searchListBar">
					<Search />
				</div>
				<SearchList />
			</div>
			<div className="listHotels">
				<div className="listHotels2">
					<ChoiceHotel />
				</div>
			</div>
			<div>
				<Map />
			</div>
		</>
	);
};
