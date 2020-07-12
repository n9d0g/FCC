import React from 'react'
import {Link} from 'react-router-dom'
import HomeButton from '../components/HomeButton'
import './HomeMainView.css'

const HomeMainView = () => {
  return (
    <section className='home-welcome'>
      <div className='home-welcome-content'>
        <h1 className='church-name'>Freedom in Christ Church</h1>
        <div className='home-welcome-statement'>
          <div className='home-welcome-title-container'>
            <h1 className='title-small'>To Proclaim and Display the</h1>
            <h2 className='title-big'>Reconciling</h2>
            <h2 className='title-big'>Work of Christ</h2>
          </div>
          <div className='home-welcome-buttons'>
            <Link to='/about'>
              <HomeButton text="I'm new here" />
            </Link>
            <Link to='/sermons'>
              <HomeButton text='Sermons' />
            </Link>
          </div>
        </div>
      </div>
      <div className='home-welcome-invitation'>
        <div className='empty-box'></div>
        <div className='home-welcome-invitation-text'>
          Join us via ZOOM on Sundays at 10:30am.{' '}
        </div>
      </div>
    </section>
  )
}

export default HomeMainView
