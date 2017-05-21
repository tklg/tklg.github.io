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
			<header className="header">
				<section className="width-limit">
					<section className="name-info">
						<div className="v-center">
							<span className="line name">Theodore Kluge</span>
							<span className="line tagline">I make stuff.</span>
						</div>
					</section>
					<section className="sm-info">
						{<div className="v-center">
					<a className="icon-link mdi mdi-github-circle" href="https://github.com/villa7"></a>
					<a className="icon-link mdi mdi-codepen" href="https://codepen.io/villa7"></a>
					<a className="icon-link mdi mdi-stackoverflow" href="https://stackoverflow.com/users/3605190/villa7?tab=profile"></a>
				</div>}
					{/*<img class="profpic" src="https://avatars0.githubusercontent.com/u/1696813" alt="github profile picture" />*/}
					</section>
				</section>
			</header>
		);
	}
}
