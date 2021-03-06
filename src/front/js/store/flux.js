import { param } from "jquery";
import { string } from "prop-types";
import { api_url } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			admin: [],
			user: null,
			accesToken: null,
			users: [],
			url: null,
			usergoogle: [],
			services: [],
			lastidhotel: null,
			files: []
		},
		actions: {
			url: paramsForm => {
				setStore({ url: paramsForm });
				const store = getStore();
				console.log(store.url);
			},
			addfiles: files => {
				setStore({ files: [...getStore().files, files] });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			signin_user: async paramsForm => {
				const raw = JSON.stringify(paramsForm);
				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};
				const response = await fetch(api_url + "/api/sign_in", requestPost);
				const data = await response.json();
				if (response.ok) {
					localStorage.setItem("token", data["access_token"]);
					return true;
				} else {
					return false;
				}
			},
			signin_google: paramsForm => {
				console.log(paramsForm);
				if (paramsForm) {
					localStorage.setItem("token", paramsForm.tokenId);
					return true;
				} else {
					console.log("Error", error);
					return false;
				}
			},
			// isUserAuth: () => {
			// 	const store = getStore();
			// 	return store.accesToken !== null;
			// },
			// isNormalUserAuth: () => {
			// 	const store = getStore();
			// 	return store.user.length !== 0;
			// },
			// isAdminAuth: () => {
			// 	const store = getStore();
			// 	return store.admin.length !== 0;
			// },
			register: paramsForm => {
				const raw = JSON.stringify(paramsForm);

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(api_url + "/api/sign_up", requestPost)
					.then(response => response.json())
					.then(result => {
						console.log("registrado user");
					})
					.catch(error => console.log("Error", error));
			},
			newHotel: paramsForm => {
				let body = new FormData();
				for (let i in Object.keys(paramsForm)) {
					console.log(Object.keys(paramsForm)[i], paramsForm[Object.keys(paramsForm)[i]]);
					body.append(Object.keys(paramsForm)[i], paramsForm[Object.keys(paramsForm)[i]]);
				}
				for (let i in getStore().files) {
					body.append("files", getStore().files[i]);
				}
				const requestPost = {
					method: "POST",
					// headers: { "Content-Type": "multipart/form-data" },
					body: body
				};

				fetch(api_url + "/api/new_hotel", requestPost)
					.then(response => response.json())
					.then(result => {
						setStore({ lastidhotel: result.id });
					})
					.catch(error => console.log("Error", error));
			},
			newRoom: paramsForm => {
				paramsForm["hotel_id"] = getStore().lastidhotel;
				const raw = JSON.stringify(paramsForm);

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(api_url + "/api/new_room", requestPost)
					.then(response => response.json())
					.then(result => {})
					.catch(error => console.log("Error", error));
			},
			newCitie: paramsForm => {
				let body = new FormData();
				for (let i in Object.keys(paramsForm)) {
					console.log(Object.keys(paramsForm)[i], paramsForm[Object.keys(paramsForm)[i]]);
					body.append(Object.keys(paramsForm)[i], paramsForm[Object.keys(paramsForm)[i]]);
				}
				for (let i in getStore().files) {
					body.append("files", getStore().files[i]);
				}
				const requestPost = {
					method: "POST",
					// headers: { "Content-Type": "multipart/form-data" },
					body: body
				};

				fetch(api_url + "/api/new_city", requestPost)
					.then(response => response.json())
					.then(result => {
						console.log("nuevo hotel");
					})
					.catch(error => console.log("Error", error));
			},
			newService: paramsForm => {
				const raw = JSON.stringify(paramsForm);

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(api_url + "/api/new_service", requestPost)
					.then(response => getActions().getService())
					.then(result => {
						console.log("nuevo servicio");
					})
					.catch(error => console.log("Error", error));
			},
			getService: () => {
				fetch(api_url + "/api/services")
					.then(response => response.json())
					.then(result => {
						setStore({ services: result.response });
					})
					.catch(error => console.log("Error", error));
			},
			register_google: async paramsForm => {
				const raw = JSON.stringify({
					name: paramsForm.it.HU,
					last_name: paramsForm.it.Se,
					email: paramsForm.it.Tt
				});

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};
				const response = await fetch(api_url + "/api/sign_up_google", requestPost);
				const data = await response.json();

				if (data.error) {
					return false;
				} else {
					return true;
				}
			},
			register_admin: paramsForm => {
				const raw = JSON.stringify(paramsForm);

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(api_url + "/api/sign_up_admin", requestPost)
					.then(response => response.json())
					.then(result => {
						console.log("registrado admin");
					})
					.catch(error => console.log("Error", error));
			},
			logOut: () => {
				const store = getStore();
				store.user = null;
				store.accesToken = null;
			},
			loadUsers: () => {
				fetch(api_url + "/api/users")
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ users: data });
					})
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
