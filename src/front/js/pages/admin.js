import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import logo from "../../img/golondrinablanco.png";
import header from "../../img/header.png";
import { ListGroup } from "../component/listGroup";
import { Context } from "../store/appContext";

export const Admin = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadUsers();
	}, []);

	return (
		<>
			<div>
				<div className="container text-center">
					<div className="row">
						<div className="col">
							<h1>Usuarios</h1>
						</div>
						<div className="col">
							<Link to={"/newuser"}>
								<button type="button" className="btn userBtn1 btn-primary">
									Crear un nuevo usuario
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<ListGroup />
		</>
	);
};
