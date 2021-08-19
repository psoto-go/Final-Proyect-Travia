import React from "react";

export const CarrouselHotel = () => {
	return (
		<div className="row hotelCarrousel">
			<div className="col-10">
				<div className="slider">
					<div className="slide-track">
						<div className="slide">
							<img
								className="imageHotel"
								src="https://images.daznservices.com/di/library/Goal_Argentina/86/5e/estadio-monumental-river-plate_15f3ygjfxe9ct1gtq50322fkgx.jpg?t=172937880&quality=100"
								alt=""
							/>
						</div>
						<div className="slide">
							<img
								className="imageHotel"
								src="https://images.clarin.com/2021/02/18/monumental-estilo-europeo-river-inaugura___mfyJzpJoI_0x750__1.jpg"
								alt=""
							/>
						</div>
						<div className="slide">
							<img
								className="imageHotel"
								src="https://www.prensariotila.com/Multimedios/imgs/37058_750.jpg"
								alt=""
							/>
						</div>
						<div className="">
							<img
								className="imageHotel"
								src="https://as01.epimg.net/argentina/imagenes/2020/05/26/futbol/1590502177_250133_1590502332_noticia_normal.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<button className="col-2 addImagenHotel">
				<h3>
					<i className="far fa-arrow-alt-circle-up" />
					<p>Añadir imagen</p>
				</h3>
			</button>
		</div>
	);
};
