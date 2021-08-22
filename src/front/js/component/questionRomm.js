import React from "react";
import { Link } from "react-router-dom";
import "../../styles/reviewRoom.scss";

export const QuestionRoom = () => {
	return (
		<div>
			<div className="row">
				<div className="col-11">
					<h4>Reseñas del Hotel</h4>
				</div>
				<div className="col">
					{" "}
					<u>Ver todas</u>{" "}
				</div>
			</div>
			<div className="row">
				<div className="card bg-light mb-3">
					<div className="card-header">
						<strong>Hay aparcamiento?</strong>
					</div>
					<div className="card-body">
						<p className="card-text">
							El hotel no dispone de parking privado, es por ello por lo que ofrecemos varias opciones de
							Parking para su vehículo. 1. PARKING LA MARINA. 2. PARKING GRUND. Con ambos aparcamientos
							tenemos un acuerdo para que nuestros clientes puedan beneficiarse de un descuento en el
							precio. Esperamos que le sea de utilidad, aunque no dude en contactarnos de nuevo si
							necesitase cualquier información adicional.
						</p>
					</div>
				</div>
				<div className="card bg-light mb-3">
					<div className="card-header">
						<strong>Hay aparcamiento?</strong>
					</div>
					<div className="card-body">
						<p className="card-text">
							El hotel no dispone de parking privado, es por ello por lo que ofrecemos varias opciones de
							Parking para su vehículo. 1. PARKING LA MARINA. 2. PARKING GRUND. Con ambos aparcamientos
							tenemos un acuerdo para que nuestros clientes puedan beneficiarse de un descuento en el
							precio. Esperamos que le sea de utilidad, aunque no dude en contactarnos de nuevo si
							necesitase cualquier información adicional.
						</p>
					</div>
				</div>
				<div className="card bg-light mb-3">
					<div className="card-header">
						<strong>Hay aparcamiento?</strong>
					</div>
					<div className="card-body">
						<p className="card-text">
							El hotel no dispone de parking privado, es por ello por lo que ofrecemos varias opciones de
							Parking para su vehículo. 1. PARKING LA MARINA. 2. PARKING GRUND. Con ambos aparcamientos
							tenemos un acuerdo para que nuestros clientes puedan beneficiarse de un descuento en el
							precio. Esperamos que le sea de utilidad, aunque no dude en contactarnos de nuevo si
							necesitase cualquier información adicional.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
