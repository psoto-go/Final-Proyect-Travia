import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Resenas = () => {
	return (
		<div className="resenasStyle">
			<h1>Lorem impsun</h1>
			<div className="row">
				<div className="card">
					<div className="card-header">Quote</div>
					<div className="card-body">
						<blockquote className="blockquote mb-0">
							<p>A well-known quote, contained in a blockquote element.</p>
							<footer className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className="card">
					<div className="card-header">Quote</div>
					<div className="card-body">
						<blockquote className="blockquote mb-0">
							<p>A well-known quote, contained in a blockquote element.</p>
							<footer className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className="card">
					<div className="card-header">Quote</div>
					<div className="card-body">
						<blockquote className="blockquote mb-0">
							<p>A well-known quote, contained in a blockquote element.</p>
							<footer className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className="card">
					<div className="card-header">Quote</div>
					<div className="card-body">
						<blockquote className="blockquote mb-0">
							<p>A well-known quote, contained in a blockquote element.</p>
							<footer className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
			<button type="button" className=" botonCenter mx-auto btn btn-warning">
				Leer mas
			</button>
		</div>
	);
};
