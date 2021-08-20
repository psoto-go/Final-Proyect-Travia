import { api_url } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// admin: [],
			user: null,
			accesToken: null,
			users: []
			// admins: [],
			// allusers: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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

			signin_user: paramsForm => {
				const raw = JSON.stringify(paramsForm);

				const requestPost = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw
				};

				fetch(api_url + "/api/sign_in", requestPost)
					.then(response => response.json())
					.then(result => {
						if (result["user"]) {
							setStore({ accesToken: result["access_token"], user: result });
						}
						//  else if (result["admin"]) {
						// 	setStore({ accesToken: result["access_token"], admin: result });
						// }

						console.log("bien");
						const store = getStore();
						console.log(store.user);
					})
					.catch(error => console.log("Error", error));
			},
			isUserAuth: () => {
				const store = getStore();
				return store.accesToken !== null;
			},
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
			// register_admin: paramsForm => {
			// 	const raw = JSON.stringify(paramsForm);

			// 	const requestPost = {
			// 		method: "POST",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: raw
			// 	};

			// 	fetch(api_url + "/api/sign_up_admin", requestPost)
			// 		.then(response => response.json())
			// 		.then(result => {
			// 			console.log("registrado admin");
			// 		})
			// 		.catch(error => console.log("Error", error));
			// },
			logOut: () => {
				const store = getStore();
				store.user = null;
				store.accesToken = null;
			},
			loadUsers: () => {
				fetch(api_url + "/api/allusers")
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ allusers: data });
					})
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
