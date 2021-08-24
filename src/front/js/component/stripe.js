import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import "../../styles/stripe.scss";

const stripePromise = loadStripe(
	"pk_test_51JRLw4C5qFcCXP0KWdST8LKTVwOjSojnQotgC0aiizWInCODdINEgyKXfmDN6eiDvsqSLZkrE2IW1A4uv2sAbYKV00QIlSEQB3"
);
const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async e => {
		e.preventDefault();

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement)
		});
		if (!error) {
			console.log(paymentMethod);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<CardElement className="form-control" />
			</div>
			<p>
				Al seleccionar completar esta reservación, acepto las <Link>Reglas del Hotel</Link> y{" "}
				<Link>Política de cancelación</Link>, <Link>Términos de servicio</Link> y{" "}
				<Link>Política de privacidad</Link>. También acepto pagar el monto total que se muestra, que incluye los
				impuestos de ocupación.
			</p>
			<button className="btn btn-success btn-block buttonBuy btn-outline-warning">Reservar</button>
		</form>
	);
};

export const Stripe = () => {
	return (
		<Elements stripe={stripePromise}>
			<div className="col-12 pr-0 pl-0">
				<CheckoutForm />
			</div>
		</Elements>
	);
};
