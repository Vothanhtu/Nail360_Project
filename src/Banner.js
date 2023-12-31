import React, { Component } from 'react'
import './Banner.css'
export default class Banner extends Component {
  render() {
    return (
      <div className='image-container mx-banner-center mx-center'>
        <div className='text-overlay '>
            <h1>Are you a Salon Owner?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        </div>
        <button className='btn-list'>List Your Salon</button>
      </div>
    )
  }
}
