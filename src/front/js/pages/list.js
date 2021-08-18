import React, { Component } from "react";
import { Map } from "../component/map";
import { ChoiceHotel } from "../component/choiceHotel";
import { SearchList } from "../component/searchList";

export const List = () => {
	return (
		<>
			{" "}
			<div className="mapFrame">
				<Map />
			</div>
			<div id="testing">
				<SearchList />
			</div>
			<div className="listHotels">
				<ChoiceHotel />
			</div>
		</>
	);
};
