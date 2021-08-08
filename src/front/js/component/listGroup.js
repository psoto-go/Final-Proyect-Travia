import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { ItemList } from "./itemList";

export const ListGroup = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadUsers();
	}, []);
	let allusers = store.allusers.map((item, index) => {
		return <ItemList key={index} name={item.name} last_name={item.last_name} kind={item.kind} email={item.email} />;
	});

	return (
		<div>
			<h1>Usuarios</h1>
			<div className="list-group list-group-horizontal-xl">
				{allusers.length > 0 ? allusers : "Loading users..."}
			</div>
		</div>
	);
};
