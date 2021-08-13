import React, { Component } from "react";
import { Search } from "../component/search";
import { Destacados } from "../component/destacados";

export const List = () => {
	return (
		<>
			<div id="testing">
				<Search />
				<div>
					<button type="button" className="btn btn-light ">
						Precio
					</button>
					<button type="button" className="btn btn-light ">
						Filtros
					</button>
				</div>{" "}
				<div>
					<a>ordenar por</a>
					<button type="button" className="btn btn-light botones">
						Recomendados
					</button>
				</div>
			</div>
			{/*<ul id="testing2">
				
			</ul>
			<div id="testing3">
				
			</div> -->*/}

			<div className="listHotels">
				<Destacados />
				<Destacados />
				<Destacados />
				<Destacados />
			</div>
		</>
	);
};
