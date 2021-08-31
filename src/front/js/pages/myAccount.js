import React from "react";
export const MyAccount = () => {
	return (
		<div className="m-5">
			<div className="row align-items-end">
				<div className="col-3">
					<h2>Nombre</h2>
				</div>
				<img
					width="5%"
					className="offset-md-8"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRofAXtp3QXsRmHBtNa24ki4fD8ndgbolynyaTxPCn5fFn7eo5yqtOfrB-l8G_b9s-74&usqp=CAU"
				/>
			</div>

			<div className="list-group mt-4">
				<a href="#" className="list-group-item list-group-item-action active" aria-current="true">
					<strong className="col-md-4 ">Mi cuenta</strong>
				</a>
				<a href="myAccount-booking" className="list-group-item list-group-item-action">
					<strong className="col-2">Reservas</strong>
				</a>
				<a href="/myAccount-accountFav" className="list-group-item list-group-item-action">
					<strong className="col-2">Favoritos</strong>
				</a>
				<a href="/myAccount-reviewUser" className="list-group-item list-group-item-action">
					<strong className="col-2">Reseñas</strong>
				</a>
				<a href="/myAccount-help" className="list-group-item list-group-item-action">
					<strong className="col-2">Ayuda</strong>
				</a>
				<a href="myAccount-settings" className="list-group-item list-group-item-action">
					<strong className="col-2">Configuracion</strong>
				</a>
				<div className="row justify-content-end mt-3">
					<button className="btn btn-dark">Cancelar</button>{" "}
					<button className="btn btn-success">Guardar</button>
				</div>
			</div>
		</div>
	);
};
