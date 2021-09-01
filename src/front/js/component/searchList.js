import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./search";

export const SearchList = () => {
	return (
		<div>
			<div className="searchListBar">
				<Search />
			</div>
			<div className="botonBest">
				<div className="dropdown fixP botonMargin">
					{/* <button type="button" data-toggle="dropdown" className="btn btn-info dropdown-toggle botones ">
						Precio
						<ul className="dropdown-menu">
							<li>
								<a href="#">0- 50€ Noche</a>
							</li>
							<li>
								<a href="#">50 - 80€ Noche</a>
							</li>
							<li>
								<a href="#">+ 80€ Noche</a>
							</li>
						</ul>
					</button> */}

					{/* <button
						type="button "
						data-toggle="dropdown"
						className="btn  btn-light dropdown-toggle botones p-2 ">
						Filtros
						<ul className="dropdown-menu">
							<li>
								<a href="#">Distancia</a>
							</li>
							<li>
								<a href="#">Servicios</a>
							</li>
							<li>
								<a href="#">Valoraciones</a>
							</li>
						</ul>
					</button> */}
				</div>

				{/* <div className="fixP fixP2">
					<a>Ordenar por</a>
					<a type="button" className="btn btn-light botones ">
						Recomendados
					</a>
				</div> */}
			</div>
		</div>
	);
};
