import React, { Component } from "react";
import { Map } from "../component/map";
import { ChoiceHotel } from "../component/choiceHotel";
import { SearchList } from "../component/searchList";

export const List = () => {
	return (
		<>
			{" "}
			<div id="testing">
				<SearchList />
			</div>
			<div className="listHotels">
				<div className="listHotels2">
					<ChoiceHotel />
				</div>
			</div>
			<div id="mapFrame">
				<Map />
			</div>
		</>
	);
};
