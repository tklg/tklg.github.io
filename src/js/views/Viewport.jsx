import React from 'react';

import Header from '../components/Header.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';

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
			<div className="root">
				<Header />
				<ProjectList />
				{false && <Footer />}
			</div>
		);
	}
}
