import { api_url } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			admin: null,
			user: null,
			accesToken: null
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
						setStore({ accesToken: result["access_token"], user: result });
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
						console.log("registrado");
					})
					.catch(error => console.log("Error", error));
			},
			logOut: () => {
				const store = getStore();
				store.user = null;
				store.accesToken = null;
			}
		}
	};
};

export default getState;
