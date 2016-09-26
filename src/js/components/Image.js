import React from "react";
import Modernizr from "modernizr";

var Image = React.createClass({
	render: function () {
		if (Modernizr) {
			render(
				<img src={this.props.path} />
			);
			
		} else {
			render(
				<img src={this.props.fallback} />
			);
		}

	}
});