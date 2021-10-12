import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Map } from "../component/map";
import { ChoiceHotel } from "../component/choiceHotel";
import { SearchList } from "../component/searchList";
import { api_url } from "../constants";
import "/workspace/Final-Proyect-Travia/src/front/styles/home.scss";
import { searchResponsive } from "../component/searchResponsive";

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
		<div className="row ml-0 mr-0">
			<div id="testing" className=" d-lg-block col-12 ml-0 mr-0">
				<SearchList />
			</div>

			<div className="row col-12 m-0 mb-5 p-0">
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5">
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
				<div className="col-6 ">{map ? map : ""}</div>
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
