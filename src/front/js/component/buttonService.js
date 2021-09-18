import React, { useState } from "react";
import PropTypes from "prop-types";

export const ButtonService = ({ name, callback }) => {
	const [selected, setSelected] = useState(false);
	return (
		<div
			className={selected ? "btn btnServiceOn" : "btn btnServiceOff"}
			onClick={() => {
				setSelected(!selected);
				callback();
			}}>
			{name}
		</div>
	);
};
ButtonService.propTypes = {
	name: PropTypes.string,
	callback: PropTypes.func
};
