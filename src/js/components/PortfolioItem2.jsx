import React from 'react'

import './portfolioitem.scss'

export default class PortfolioItem extends React.Component {
  render () {
    var item = this.props.item
    var imageSrc
    if (item) { // is a placeholder/loader
      imageSrc = this.props.usethumbnail ? item.image_thumb : item.image
    }
    return (
      <article className='card flex-container' data-title={(item || {}).name || ''}>

        {item && <section className='info flex'>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
          {(item.tags.trim().length > 0) && <div className='tags'>
            {item.tags.trim().split(',').map((tag, i) => <span key={i}>{tag}</span>)}
          </div>}
          <p dangerouslySetInnerHTML={{ __html: item.content }} />
          <footer>
            {!!item.link_project && <a href={item.link_project} target='_blank'>View project</a>}
            {!!item.link_github && <a href={item.link_github} target='_blank'>Github repository</a>}
          </footer>
        </section>}
        {item && <section className='preview'>
          <img src={imageSrc} />
        </section>}
      </article>
    )
  }
}
