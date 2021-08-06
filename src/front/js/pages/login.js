import React from "react";
import logo from "../../img/golondrina.png";
import facebook from "../../img/facebooklogo.jpg";
import google from "../../img/googlelogo.png";
import apple from "../../img/apple.png";

export const Login = () => {
	return (
		<div className="offset-4 col-4 my-auto text-center">
			<form className="form-signin">
				<img className="mb-4" src={logo} alt="" width="72" height="72" />
				<h1 className="text-center mb-3 font-weight-normal">Inicia sesión</h1>
				<hr />
				<div className="form-group row">
					<label htmlFor="inputPassword" className="col-sm-2 col-form-label">
						Email
					</label>

					<div className="col-sm-10">
						<input type="password" className="form-control" id="inputPassword" placeholder="Password" />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputPassword" className="col-sm-2 col-form-label">
						contraseña
					</label>
					<div className="col-sm-10">
						<input type="password" className="form-control" id="inputPassword" placeholder="Password" />
					</div>
				</div>
				<div className="checkbox mb-3">¿Olvidaste tu contraseña?</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">
					Iniciar sesión
				</button>
				<p className="text-right p-2">¿No tienes cuenta? Regístrate</p>
				<hr className="hr-text" data-content="o usar una de estas opciones" />
				<div className="d-flex justify-content-center">
					<img className="mr-5" src={facebook} alt="" width="72" height="72" />

					<img className="mr-5" src={google} alt="" width="72" height="72" />

					<img className="mr-5" src={apple} alt="" width="52" height="64" />
				</div>

				<p className="text-center mt-5 mb-3 text-muted">
					Al iniciar sesión o al crear una cuenta, aceptas nuestros Términos y condiciones y la Política de
					privacidad
				</p>
				<h2 />
				<hr />
			</form>
		</div>
	);
};
