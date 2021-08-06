import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Header } from "../component/header";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <Header />;
};
