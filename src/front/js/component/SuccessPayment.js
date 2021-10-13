import React from "react";
import palomita from "../../img/palomita.png";

export const Success = () => {
    return(
        <div>
            <div className="offset-4 col-4 my-auto text-center">
			<form className="form-signin">
				<h1 className="text-center mb-3 font-weight-normal">Te damos la bienvenida a Travia!</h1>
				<hr />
				<img className="mb-4" src={palomita} alt="" width="150" height="150" />
				<h1 className="text-center mb-3 font-weight-normal">Tu cuenta fue creada con exito</h1>
				<h2 />
				<div className="checkbox mb-3">Se te ha enviado un email al xxxxx@gmail.com</div>
				<div className="checkbox mb-3">Politicas de datos etc etc</div>
				<hr />
				<button className="btn btn-lg btn-primary btn-block" type="submit">
					Iniciar sesión
				</button>
			</form>
		</div>
        </div>
    )
}