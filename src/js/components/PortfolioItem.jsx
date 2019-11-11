import React from 'react'
import Lightbox from './Lightbox'
import './portfolioitem.scss'

export default class PortfolioItem extends React.Component {
  constructor () {
    super()
    this.state = {
      lightbox: -1
    }
  }
  render () {
    var item = this.props.item
    var imageSrc
    if (item) { // is a placeholder/loader
      imageSrc = this.props.usethumbnail ? item.image_thumb : item.images[0]
    }
    return (
      <article className='card flex-container' data-title={(item || {}).name || ''}>

        {item && <section className='info flex flex-container flex-vertical'>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
          {(item.tags.trim().length > 0) && <div className='tags'>
            {item.tags.trim().split(',').map((tag, i) => <span key={i}>{tag}</span>)}
          </div>}
          <p className='flex' dangerouslySetInnerHTML={{ __html: item.content }} />
          <footer>
            {!!item.link_project && <a href={item.link_project} target='_blank'>View project</a>}
            {!!item.link_github && <a href={item.link_github} target='_blank'>Github repository</a>}
          </footer>
        </section>}
        {item && <section className='preview'>
          <img onClick={e => this.setState({ lightbox: 0 })} src={imageSrc} alt={imageSrc} />
        </section>}
        <Lightbox
          open={this.state.lightbox > -1}
          onClose={e => this.setState({ lightbox: -1 })}
          onNext={e => this.setState({ lightbox: this.state.lightbox + 1 })}
          onPrev={e => this.setState({ lightbox: this.state.lightbox - 1 })}
          image={item.images[this.state.lightbox]}
          hasNext={this.state.lightbox < item.images.length - 1}
          hasPrev={this.state.lightbox > 0} />
      </article>
    )
  }
}
