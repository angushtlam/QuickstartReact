import '../css/core.scss';

import React from "react";

import Greeting from "./components/Greeting";
import Logo from "./components/Logo";

var App = React.createClass({
	render: function () {
		return (
			<div>
				<Greeting />
				<Logo />
			</div>
		);
	}
});

module.exports = App;