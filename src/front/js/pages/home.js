import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/cards.scss";
import { Header } from "../component/header";
import { Cities } from "../component/cities";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Header />
			<Cities />
		</>
	);
};
