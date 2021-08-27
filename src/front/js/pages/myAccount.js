import React from "react";
export const MyAccount = () => {
	return (
		<div className="m-5">
			<div className="row align-items-end">
				<div className="col-3">
					<h2>Lorem ipsum </h2>
					<p>Dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<img
					width="5%"
					className="offset-md-8"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRofAXtp3QXsRmHBtNa24ki4fD8ndgbolynyaTxPCn5fFn7eo5yqtOfrB-l8G_b9s-74&usqp=CAU"
				/>
			</div>
			<div className="justify-content-center mt-1">
				<div className="list-group mt-4">
					<a href="#" className="list-group-item active">
						<div className="row">
							<strong className="col-md-4 ">Mi cuenta</strong>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row">
							<strong className="col-2">Reservas</strong> <p className="col-10">Dolor sit amet</p>
						</div>
					</a>
					<a href="/accountFav" className="list-group-item">
						<div className="row">
							<strong className="col-2">Favoritos</strong> <p className="col-10">Dolor sit amet</p>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row">
							<strong className="col-2">Reseñas</strong> <p className="col-10">Dolor sit amet</p>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row">
							<strong className="col-2">Ayuda</strong> <p className="col-10">Dolor sit amet</p>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row">
							<strong className="col-2">Configuracion</strong> <p className="col-10">Dolor sit amet</p>
						</div>
					</a>
				</div>
			</div>
			<div className="row justify-content-end mt-3">
				<button className="btn btn-dark">Cancelar</button> <button className="btn btn-success">Guardar</button>
			</div>
		</div>
	);
};
