import React from "react";

export const UserHelp = () => {
	return (
		<div className="m-5">
			<div className="row align-items-end">
				<div className="col-3">
					<h2>Ayuda</h2>
				</div>
				<img
					width="5%"
					className="offset-md-8"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRofAXtp3QXsRmHBtNa24ki4fD8ndgbolynyaTxPCn5fFn7eo5yqtOfrB-l8G_b9s-74&usqp=CAU"
				/>
			</div>

			<div className="list-group mt-4">
				<a href="/myAccount" className="list-group-item list-group-item-action active" aria-current="true">
					<strong className="col-md-4 ">Mi cuenta</strong>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<strong className="col-2">Politicas de datos</strong>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<strong className="col-2">Politicas de reservas</strong>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<strong className="col-2">Preguntas frecuentes</strong>
				</a>
			</div>
		</div>
	);
};
