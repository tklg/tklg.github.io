import React from 'react';

export default class PortfolioItem extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		
	}
	componentWillUnmount() {
		
	}
	render() {
		var item = this.props.item;
		var imageSrc = this.props.usethumbnail ? item.image_thumb : item.image;
		return (
			<article {...this.props.props} data-title={item.name}>
				<section className="title-stack">
					<div className="title-container">
						<h1>{item.name}</h1>
						<h2>{item.description}</h2>
						<p dangerouslySetInnerHTML={{__html: item.content}}></p>
						{!!item.link_project && <a href={item.link_project} target="_blank">{/*item.link_project*/}View project</a>}
						{!!item.link_github && <a href={item.link_github} target="_blank">{/*item.link_github*/}Github repository</a>}
					</div>
				</section>
				<section className="preview">
					<img src={imageSrc} />
				</section>
			</article>
		);
	}
}
