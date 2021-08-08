import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { ItemList } from "./itemList";

export const ListGroup = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadUsers();
	}, []);
	let allusers = store.allusers.map((item, index) => {
		return (
			<ItemList
				key={index}
				name={item.name}
				last_name={item.last_name}
				kind={item.kind}
				email={item.email}
				date={item.created_date}
			/>
		);
	});

	return (
		<div>
			<table className="table text-center">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Email</th>
						<th scope="col">Tipo de usuario</th>
						<th scope="col">Fecha de creacion</th>
					</tr>
				</thead>
				<tbody>{allusers.length > 0 ? allusers : "Loading users..."}</tbody>
			</table>
		</div>
	);
};
