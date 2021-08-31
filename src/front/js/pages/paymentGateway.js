import React from "react";
import ReactDOM from "react-dom";
import { Stripe } from "../component/stripe";
import { Link } from "react-router-dom";
import "../../styles/paymentGateway.scss";
import { PaymentCard } from "../component/paymentCard";
import { PaymentInfo } from "../component/paymentInfo";

export const PaymentGateway = () => {
	return (
		<div className="PaymentGateway">
			<div className="row">
				{/* <button
					onClick={() => {
						console.log(JSON.parse(localStorage.getItem("reserva")));
					}}>
					adsfasdfdsf
				</button> */}
				<p>
					<Link>
						<i className="fas fa-angle-double-left" />
					</Link>
					<Link> Volver al Hilton Costas del Sol</Link>
				</p>
			</div>
			<div className="row m-0 d-flex flex-wrap">
				<div className="col-4">
					<PaymentCard />
				</div>
				<div className="col-7">
					<PaymentInfo />
				</div>
			</div>
		</div>
	);
};
