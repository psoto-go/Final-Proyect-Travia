import React from "react";
import "../../styles/addHotelDesc.scss";

export const AddHotelDesc = () => {
	return (
		<div className="row descHotel1">
			<div className="col-6">
				<div className="row">
					<div className="col-6">
						<p>
							<strong>Nombre del Hotel</strong>
						</p>
						<div className="input-group mb-3">
							<div className="input-group-prepend" />
							<input
								type="text"
								className="form-control"
								placeholder="Hilton Costa del sol"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
					</div>
					<div className="col-6">
						<p>
							<strong>Ubicacion *Link*</strong>
						</p>
						<div className="input-group mb-3">
							<div className="input-group-prepend" />
							<input
								type="text"
								className="form-control"
								placeholder="Link a la ubicacion del hotel"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-8">
						<strong>Servicios del Hotel</strong>
					</div>
					<div className="col-4">
						Añadir servicios{" "}
						<button className="add rounded-circle text-center ">
							<i className="fas fa-award" />
						</button>
					</div>
				</div>
				<button className="btn btnServiceOn">Servicios</button>
				<button className="btn btnServiceOn">Servicios</button>
				<button className="btn btnServiceOff">Servicios</button>
				<button className="btn btnServiceOff">Servicios</button>
				<button className="btn btnServiceOn">Servicios</button>
				<button className="btn btnServiceOff">Servicios</button>
				<button className="btn btnServiceOn">Servicios</button>
				<button className="btn btnServiceOn">Servicios</button>
				<button className="btn btnServiceOff">Servicios</button>
				<button className="btn btnServiceOff">Servicios</button>
				<button className="btn btnServiceOff">Servicios</button>
				<button className="btn btnServiceOn">Servicios</button>
				<div className="DatepickHotel">
					<h4>Disponibilidad</h4>
					<p>Añade las fechas disponibles</p>
					<input type="date" min="2019-06-02" max="2019-06-08" />
				</div>
			</div>
			<div className="col-6 descHotel">
				<p>
					<strong>Descripcion</strong>
				</p>
				<div className="input-group">
					<textarea className="form-control formDesc" aria-label="With textarea">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida massa ac varius malesuada
						gravida pellentesque augue. Diam risus neque sodales morbi lectus sit pellentesque. Vestibulum,
						lorem suspendisse enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida massa
						ac varius malesuada gravida pellentesque augue. Diam risus neque sodales morbi lectus sit
						pellentesque. Vestibulum, lorem suspendisse enim.
					</textarea>
				</div>

				<div className="btn-group-toggle" data-toggle="buttons">
					<button className="btn btnServiceOff">Cancelar</button>
					<button type="button" className="btn btn-success">
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};
