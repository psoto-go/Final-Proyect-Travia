import React, { Component } from "react";

import "../../styles/index.scss";
import PropTypes from "prop-types";

export const Gallery = props => {
	return (
		<>
			<div className="galleryView ">
				<h2>Gallery</h2>
				<div className="row">
					<img src={props.urls[0]} className="col-6" data-toggle="modal" data-target="#exampleModal" />

					<div className="col-6 p-0 p-sm-0 p-md-0 row">
						<div className="col-6 ">
							<img
								src={props.urls[1]}
								className="col px-2 pb-2"
								data-toggle="modal"
								data-target="#exampleModal"
							/>
							<img
								src={props.urls[2]}
								className="col px-2 pt-5 "
								data-toggle="modal"
								data-target="#exampleModal"
							/>
						</div>
						<div className="col-6">
							<div>
								<img
									src={props.urls[3]}
									className="col px-2 pb-2"
									data-toggle="modal"
									data-target="#exampleModal"
								/>
							</div>
							<div>
								<img
									src="https://casadelpoeta.es/wp-content/uploads/2019/09/Hoteles-con-encanto-en-Espa%C3%B1a.jpg"
									className="col px-2 pt-5"
									data-toggle="modal"
									data-target="#exampleModal"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-xl ">
					<div className="modal-content  ">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Imagenes Muestra
							</h5>
						</div>
						<div className="modal-body">
							<div className="container-fluid ">
								<img src={props.urls[2]} className="col-12 "></img>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								left
							</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								right
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Gallery.propTypes = {
	urls: PropTypes.array
};
