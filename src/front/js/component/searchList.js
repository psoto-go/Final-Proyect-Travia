import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./search";

export const SearchList = () => {
	return (
		<div>
			<div id="searchListBar">
				<Search />
			</div>
			<div id="botonBest">
				<div className="fixP">
					<button type="button" className="btn btn-light botones ">
						Precio
					</button>
					<button type="button" className="btn btn-light botones ">
						Filtros
					</button>
				</div>

				<div className="fixP fixP2">
					<a>Ordenar por</a>
					<button type="button" className="btn btn-light botones ">
						Recomendados
					</button>
				</div>
			</div>
		</div>
	);
};
