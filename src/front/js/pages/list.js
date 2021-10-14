import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Map } from "../component/map";
import { ChoiceHotel } from "../component/choiceHotel";
import { SearchList } from "../component/searchList";
import { api_url } from "../constants";
import "../../styles/home.scss";
import { SearchResponsive } from "../component/searchResponsive";

export const List = props => {
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState();
	const [map, setMap] = useState();

	useEffect(() => {
		fetch(store.url)
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
				if (result.response.length > 0) {
					setMap(<Map hotels={result.response} />);
				} else {
					setMap(null);
				}
			})
			.catch(error => console.log("Error", error));
	}, [store.url]);

	return (
		<div className="row ml-0 mr-0 table-responsive">
			<div id="testing" className="d-none d-xl-block d-lg-block col-12 ml-0 mr-0 table mb-0">
				<SearchList />
			</div>
			<div className="d-xl-none d-lg-block d-md-block d-sm-block col-12 headerReverse pb-5">
				<SearchResponsive />
			</div>

			<div className="row m-0 p-0">
				<div className="col mt-5 mb-5 ml-3">
					{detalles
						? detalles.map((hotel, index) => {
								// console.log(hotel.rooms);
								return (
									<ChoiceHotel
										key={index}
										name={hotel.name}
										url={hotel.HotelArchives[0].url}
										rooms={hotel.rooms}
										id={hotel.id}></ChoiceHotel>
								);
						  })
						: ""}
				</div>
				<div className="col">{map ? map : ""}</div>
			</div>
			{/*
			<div className="d-none d-lg-none d-xl-block">
				<searchResponsive />
			</div>*/}
		</div>
	);
};
List.propTypes = {
	data: PropTypes.object
};
