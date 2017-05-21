import React from 'react';

export default class Viewport extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		
	}
	componentWillUnmount() {
		
	}
	render() {
		return (
			<footer className="footer">
				<div className="v-center">
					<a className="icon-link mdi mdi-github-circle" href="https://github.com/villa7"></a>
					<a className="icon-link mdi mdi-codepen" href="https://codepen.io/villa7"></a>
					<a className="icon-link mdi mdi-stackoverflow" href="https://stackoverflow.com/users/3605190/villa7?tab=profile"></a>
				</div>
			</footer>
		);
	}
}
