import React from "react";

export const Navbar = () => {
	return (
		<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4">
			{/*<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>*/}
			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Inicio
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Nosotros
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Destinos y Hoteles
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Empresas
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Contacto
					</a>
				</li>
			</ul>

			<div className="d-flex flex-column my-2 my-lg-0 flex-md-row align-items-center p-3 px-md-4 mb-3  ">
				<nav className="my-2 my-md-0 mr-md-3 btn btn-outline-success my-2 my-sm-0">
					<a className="p-2 text-dark" href="#">
						Registrarse
					</a>
				</nav>
				<a className="btn btn-outline-primary" href="#">
					Iniciar sesión
				</a>
			</div>
		</div>
	);
};
