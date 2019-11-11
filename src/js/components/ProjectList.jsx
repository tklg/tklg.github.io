import React from 'react'
import PortfolioItem from './PortfolioItem.jsx'
import './projectlist.scss'

export default class ProjectList2 extends React.Component {
  constructor () {
    super()
    this.state = {
      portfolio: []
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount () {
    fetch('https://spreadsheets.google.com/feeds/list/1Xg_IU23Pf60PIhwVgf5VLQzO7XYZOWbOuFMZvp4uiR8/1/public/values?alt=json')
      .then(resp => {
        return resp.json().then(json => {
          var items = json.feed.entry
          var arr = []
          for (var i = 0; i < items.length; i++) {
            var obj = {
              'name': items[i].gsx$title.$t,
              'images': items[i].gsx$preview.$t.split(/,\s*/),
              'image_thumb': items[i].gsx$thumb.$t,
              'content': items[i].gsx$description.$t,
              'description': items[i].gsx$shortdescription.$t,
              'link_project': items[i].gsx$url.$t,
              'link_github': items[i].gsx$github.$t,
              'tags': items[i].gsx$tags.$t,
              'num': i
            }
            if (obj.link_project && obj.link_project.substr(0, 5) !== 'https') {
              obj.link_project = 'http://' + obj.link_project
            }
            if (obj.link_github && obj.link_github.substr(0, 5) !== 'https') {
              obj.link_github = 'http://' + obj.link_github
            }
            arr.push(obj)
          }
          this.setState({
            portfolio: arr
          })
        })
      })
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  updateWindowDimensions () {
    this.setState({ width: window.innerWidth })
  }
  render () {
    return (
      <section className='card-list'>
        {
          this.state.portfolio.map((x, i) => <PortfolioItem
            item={x}
            key={i}
          />)
        }
      </section>
    )
  }
}
