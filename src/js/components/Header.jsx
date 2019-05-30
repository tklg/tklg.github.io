import React from 'react'
import Icon from './Icon'
import './header.scss'

export default class Header extends React.Component {
  render () {
    return (
      <header className='header flex-container flex-center'>
        <section className='width-limit flex-container flex-horizontal'>
          <section className='name-info flex-container flex-center'>
            <div className='v-center'>
              <span className='line name'>Theodore Kluge</span>
              <span className='line tagline'>I make stuff.</span>
            </div>
          </section>
          <section className='sm-info flex-container flex-center'>
            <div className='v-center'>
              <a href='https://github.com/villa7' target='_blank'>
                <Icon icon='github' />
              </a>
              <a href='https://codepen.io/villa7' target='_blank'>
                <Icon icon='codepen' />
              </a>
              <a href='https://stackoverflow.com/users/3605190/villa7?tab=profile' target='_blank'>
                <Icon icon='stackoverflow' />
              </a>
            </div>
          </section>
        </section>
      </header>
    )
  }
}
