import React from "react";
import "../../styles/paymentGateway.scss";

export const PaymentCard = () => {
	return (
		<div className="card paymentCard">
			<img
				src="https://www.hotelartsbarcelona.com/app/uploads/2021/01/gifthotelartsresponsive.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Hotel Hilton Costa del Sol</h5>
				<p className="card-text">Habitacion Doble</p>
				<p className="card-text">Avenida Siempre Viva 25, 29879, Malaga</p>
				<p className="card-text">Lun 28 de sep 2021 - Mie 30 de Mar 2022</p>
			</div>
			<ul className="list-group list-group-flush ">
				<li className="list-group-item paymentImage border-top">
					<p className="col-6">$7 x 170 noches $1200</p>
				</li>
				<li className="list-group-item paymentImage border-top">impuestos 0$</li>
				<li className="list-group-item paymentImage border-top">Total $1200</li>
			</ul>
			<div className="card-body text-center">
				<p>Agregar codigo promocional</p>
			</div>
		</div>
	);
};
