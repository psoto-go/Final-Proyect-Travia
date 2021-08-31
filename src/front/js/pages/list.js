import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Map } from "../component/map";
import { ChoiceHotel } from "../component/choiceHotel";
import { SearchList } from "../component/searchList";
import { api_url } from "../constants";
import "/workspace/Final-Proyect-Travia/src/front/styles/home.scss";

export const List = props => {
	const { store, actions } = useContext(Context);
	const [detalles, setDetalles] = useState();
	useEffect(() => {
		fetch(store.url)
			.then(response => response.json())
			.then(result => {
				setDetalles(result.response);
			})
			.catch(error => console.log("Error", error));
	}, [store.url]);

	return (
		<div>
			<div id="testing" className="fixSearch">
				<SearchList />
			</div>

			<div>
				<div className="row ">
					<div className="col-7">
						{detalles
							? detalles.map((hotel, index) => {
									// console.log(hotel.rooms);
									return (
										<ChoiceHotel
											key={index}
											name={hotel.name}
											url={hotel.HotelArchives[0].url}
											rooms={hotel.rooms}></ChoiceHotel>
									);
							  })
							: ""}
					</div>
					<div className="col-5">
						<Map />
					</div>
				</div>
			</div>
		</div>
	);
};
List.propTypes = {
	data: PropTypes.object
};
