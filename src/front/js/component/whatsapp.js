import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/whatsapp.scss";

export const Whatsapp = () => {
	return (
		<div className="btn-whatsapp">
			<a href="https://api.whatsapp.com/send?phone=+34677381623" target="_blank" rel="noreferrer">
				<img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="" />
			</a>
		</div>
	);
};
