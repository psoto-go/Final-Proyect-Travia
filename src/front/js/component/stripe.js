import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

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
			<img
				src="https://www.hotelartsbarcelona.com/app/uploads/2021/01/gifthotelartsresponsive.png"
				className="img-fluid"
			/>
			<div className="form-group">
				<CardElement className="form-control" />
			</div>

			<button className="btn btn-success ">Buy</button>
		</form>
	);
};

export const Stripe = () => {
	return (
		<Elements stripe={stripePromise}>
			<div className="container p-4">
				<div className="row">
					<div className="col-md-4 offset-md-4">
						<CheckoutForm />
					</div>
				</div>
			</div>
		</Elements>
	);
};
