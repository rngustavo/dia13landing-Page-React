import React from "react";

export function Jumbotron() {
	//	return <h1>Hello Jumbotron</h1>;
	return (
		<div className="jumbotron text-left">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>

			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}
