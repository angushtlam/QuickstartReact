import React from "react";

import GlassesSvg from "./../../img/glasses.svg";

var Glasses = React.createClass({
	render: function () {
		return (
			<img id="logo" src={GlassesSvg} />
		);
	}
});

module.exports = Glasses;