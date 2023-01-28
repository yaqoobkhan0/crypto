import React from "react";
import {
	// Space,
	Typography,
} from "antd";
// import {Link} from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<Typography.Title
				level={5}
				style={{ color: "white", textAlign: "center" }}>
				Cryptoview <br />
				
				<br />
				GEEKSTER
			</Typography.Title>

			<div
				className={
					"text-white md:flex list-none flex-row justify-between items-center  text-white-600 hover:text-blue-800 visited:text-white-600 text-2xl"
				}></div>
		</div>
	);
};

export default Footer;
