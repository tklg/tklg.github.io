import React, { Component } from 'react'
import './index.scss'

export default class Lightbox extends Component {
  render () {
    return (
      <div className={'lightbox-container flex-container flex-center' + (this.props.open ? ' active' : '')} onClick={this.props.onClose}>
        <svg viewBox='0 0 24 24' onClick={this.props.onClose}>
          <path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
        </svg>

        <div className='lightbox flex-container' onClick={e => e.stopPropagation()}>
          <button className='flex-container flex-center' disabled={!this.props.hasPrev} onClick={this.props.onPrev}>
            <svg viewBox='0 0 24 24'>
              <path d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' />
            </svg>
          </button>
          <img className='flex' src={this.props.image} alt={this.props.image} />
          <button className='flex-container flex-center' disabled={!this.props.hasNext} onClick={this.props.onNext}>
            <svg viewBox='0 0 24 24'>
              <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
            </svg>
          </button>
        </div>
      </div>
    )
  }
}
