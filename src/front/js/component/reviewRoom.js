import React from "react";
import { Link } from "react-router-dom";
import "../../styles/reviewRoom.scss";
import { QuestionRoom } from "./questionRomm";
export const ReviewRoom = () => {
	return (
		<div className="mt-5">
			<div className="row">
				<div className="col-4">
					<h4>Filtros reseñas</h4>
				</div>
				<div className="col-4">
					Añadir reseña{" "}
					<button className="add rounded-circle text-center ">
						<i className="fas fa-award" />
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-10">
					<button className="btn btnReview">+ Ubicacion</button>
					<button className="btn btnReview">+ Habitacion</button>
					<button className="btn btnReview">+ Comida</button>
					<button className="btn btnReview">+ Ubicacion</button>
					<button className="btn btnReview">+ Comida</button>
					<button className="btn btnReview">+ Habitacion</button>
				</div>
			</div>
			<div className="mt-5 row">
				<div className="col-11">
					<h4>Reseñas del Hotel</h4>
				</div>
				<div className="col">
					{" "}
					<u>Ver todas</u>{" "}
				</div>
			</div>
			<div className="row reviewCarrousel">
				<div className="col-12 ReviewsCards">
					<div className="card ">
						<img
							src="http://2.bp.blogspot.com/-itYtAL5lBeE/TkFdlIhhacI/AAAAAAAABHI/HYGHzdl85UI/s280/111433_aerogenerador.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src="http://2.bp.blogspot.com/-itYtAL5lBeE/TkFdlIhhacI/AAAAAAAABHI/HYGHzdl85UI/s280/111433_aerogenerador.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src="http://2.bp.blogspot.com/-itYtAL5lBeE/TkFdlIhhacI/AAAAAAAABHI/HYGHzdl85UI/s280/111433_aerogenerador.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
						</div>
					</div>
					<div className="card">
						<img
							src="http://2.bp.blogspot.com/-itYtAL5lBeE/TkFdlIhhacI/AAAAAAAABHI/HYGHzdl85UI/s280/111433_aerogenerador.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<QuestionRoom />
			</div>
		</div>
	);
};
