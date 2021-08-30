import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { HotelDetail } from "./pages/hotelDetail";
import injectContext from "./store/appContext";
import { List } from "./pages/list";
import { Welcome } from "./pages/welcome";
import { Signup } from "./pages/signUp";
import { Login } from "./pages/login";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Admin } from "./pages/admin";
import { NewUser } from "./pages/newUser";
import { Admindash } from "./pages/adminDash";
import { AdminProvincias } from "./pages/adminProvincias";
import { AdminHoteles } from "./pages/adminHoteles";
import { OnlyHotel } from "./pages/onlyHotel";
import { FavUser } from "./pages/favUser";
import { PaymentGateway } from "./pages/paymentGateway";
import { MyAccount } from "./pages/myAccount";
import { AddCountry } from "./pages/addCountry";
import { UserConfig } from "./pages/userConfig";

export const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/hotel/:theid">
							<HotelDetail />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/welcome">
							<Welcome />
						</Route>
						<Route exact path="/admin">
							<Admin />
						</Route>
						<Route exact path="/newuser">
							<NewUser />
						</Route>
						<Route exact path="/list">
							<List />
						</Route>
						<Route exact path="/adminDash">
							<Admindash />
						</Route>
						<Route exact path="/adminProvincias">
							<AdminProvincias />
						</Route>
						<Route exact path="/adminHoteles">
							<AdminHoteles />
						</Route>
						<Route exact path="/myAccount-settings">
							<UserConfig />
						</Route>
						<Route exact path="/onlyHotel">
							<OnlyHotel />
						</Route>

						<Route exact path="/payment">
							<PaymentGateway />
						</Route>
						<Route exact path="/myAccount">
							<MyAccount />
						</Route>
						<Route exact path="/myAccount-accountFav">
							<FavUser />
						</Route>
						<Route exact path="/addCountry">
							<AddCountry />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
