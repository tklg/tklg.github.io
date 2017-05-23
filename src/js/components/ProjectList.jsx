import React from 'react';
import PortfolioItem from './PortfolioItem.jsx';

const maxFeaturedProjects = 5;
const viewMinWidth = 800; /// 680, 800

export default class ProjectList extends React.Component {
	constructor() {
		super();
		var projects = (new Array(5)).fill(null);
		this.state = {
			portfolio: projects,
			viewing: projects.map(() => 'active'),
			hoverstate: projects.map(() => null),
		}
		this.onProjectSelected = this.onProjectSelected.bind(this);
		this.onHover = this.onHover.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
		fetch('https://spreadsheets.google.com/feeds/list/1Xg_IU23Pf60PIhwVgf5VLQzO7XYZOWbOuFMZvp4uiR8/1/public/values?alt=json')
			.then(resp => {
				return resp.json().then(json => {
					var items = json.feed.entry;
					var arr = [];
					for (var i = 0; i < items.length && i < maxFeaturedProjects; i++) {
						var obj = {
			                "name": items[i].gsx$title.$t,
			                "image": items[i].gsx$preview.$t,
			                "image_thumb": items[i].gsx$preview.$t.substr(0, items[i].gsx$preview.$t.lastIndexOf('.')) + '-thumb' + items[i].gsx$preview.$t.substr(items[i].gsx$preview.$t.lastIndexOf('.')),
			                "content": items[i].gsx$description.$t,
			                "description": items[i].gsx$shortdescription.$t,
			                "link_project": items[i].gsx$url.$t,
			                "link_github": items[i].gsx$github.$t,
			                "num": i
			            };
			            if (obj.link_project.substr(0, 5) != 'https' && obj.link_project.length) {
			            	obj.link_project = 'http://' + obj.link_project;
			            }
			            obj.link_github = 'https://' + obj.link_github;
			            arr.push(obj);
					}
					this.setState({
						portfolio: arr,
						viewing: arr.map(() => 'active'),
						hoverstate: arr.map(() => null),
					})
				})
			})
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}
	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth});
	}
	onProjectSelected(n) {
		if (this.state.width <= viewMinWidth) return;
		var viewing = this.state.viewing;
		if (viewing.reduce((x, y) => x && y)) {
			viewing = viewing.map((x, i) => i == n ? 'feature' : null);
		} else if (viewing[n]) {
			viewing = viewing.map(() => 'active');
		} else {
			viewing = viewing.map((x, i) => i == n ? 'feature' : null);
		}
		this.setState({
			viewing: viewing,
			transitioning: 'transitioning',
		}, () => {
			setTimeout(() => {
				this.setState({
					transitioning: null,
				})
			}, 400);
		});
	}
	onHover(n) {
		if (this.state.width <= viewMinWidth) return;
		var hoverstate = this.state.hoverstate;
		if (n === false) {
			hoverstate = hoverstate.map(() => null);
		} else {
			hoverstate = hoverstate.map((x, i) => {
				if (this.state.viewing[n] == 'feature') return null;
				if (i == n) {
					return 'hover';
				} else if (n - 1 > -1 && i == n - 1) {
					return 'hover-prev'
				} else return null;
			});
		}
		this.setState({
			hoverstate: hoverstate
		});
	}
	render() {
		return (
			<section className="h-list">
				{
					/*(this.state.portfolio.length ? */this.state.portfolio.map((x, i) => <PortfolioItem 
										item={x}
										usethumbnail={this.state.viewing[i] != 'feature'}
										key={i}
										props={{
										 	className: "bar " + "bar-" + (i + 1) + ' ' + (this.state.viewing[i] || '') + ' ' + (this.state.hoverstate[i] || '') + ' ' + (this.state.transitioning || '') + ' ' + (x ? '':'loading'),
											onClick: () => this.onProjectSelected(i),
											onMouseOver: () => this.onHover(i),
											onMouseOut: () => this.onHover(false),
										}} 
										/>
						)/* : (
							<div className="loader">loading</div>
						)
					)*/

				}
			</section>
		);
	}
}
