import React from "react";

export const Reviews = () => {
	return (
		<div className="resenasStyle">
			<h1>Nuestros usuarios opinan</h1>
			<div className="row">
				<div className="card">
					<div className="card-header">Pablo</div>
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
					<div className="card-header">Alejandro</div>
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
					<div className="card-header">David</div>
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