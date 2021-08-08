import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Countries = () => {
	return (
		<div className="col">
			<Card>
				<Card.Img
					className="country"
					variant="top"
					src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Ibiza_rock_volcano_%28747230830%29.jpg"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/">
							<p style={{ color: "black" }}>4 hoteles</p>
						</Link>
						<h3>Asturias</h3> <Card.Text />
					</Card.Title>
				</Card.Body>
			</Card>
			<br />
			<div>
				<button className="btn bg-transparent">Asturias</button>
				<button className="btn bg-transparent">Murcia</button>
				<button className="btn bg-transparent">Mallorca</button>
				<button className="btn bg-transparent">Islas Canarias</button>
			</div>

			<hr />

			<div className="container-fluid">
				<div className="row">
					<div className="col-12 mt-3">
						<div className="card">
							<div className="card-horizontal">
								<div className="img-square-wrapper">
									<img
										className="picture"
										src="https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1586529185422-B9XBTSLKN3KFZDYBGKFI/que-ver-en-asturias-picos-portada.jpg?format=1500w"
										alt="Card image cap"
									/>
								</div>
								<div className="card-body">
									<h4 className="card-title">Lorem impsum dolor</h4>
									<p className="card-text">
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industrys standard dummy text ever since the 1500s
									</p>
								</div>
							</div>
							<div className="card-footer">
								<Link to="#">
									<p className="underline">Leer mas informacion</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container bcontent">
				<h2>Lorem impsum</h2>
				<hr />
				<div className="card" style={{ width: "500px" }}>
					<div className="row no-gutters">
						<div className="col-sm-5">
							<img
								style={{ width: "300px", borderRadius: "50px" }}
								className="card-img"
								src="https://www.hotelesparaadultos.com/img5/plaza-sb-barcelona-suite-superior-jacuzzi.jpg"
								alt="Jacuzzi"
							/>
						</div>
						<div className="col-sm-7">
							<div className="card-body">
								<a href="#" className="btn btn-primary">
									View Profile
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h1>Lorem impsun</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, porta erat ridiculus nunc mi odio
					vitae.{" "}
				</p>
			</div>
			<br />
			<div className="text-center">
				<h1>Lorem impsun</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, porta erat ridiculus nunc mi odio
					vitae.{" "}
				</p>
			</div>
		</div>
	);
};
