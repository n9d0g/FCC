import React from 'react'
import {Link} from 'react-router-dom'
import HomeButton from '../components/HomeButton'
import './HomeMainView.css'

const HomeMainView = () => {
  return (
    <section className='home-landingpage'>
      <div className='home-welcome'>
        <div className='home-welcome-content'>
          <h1 className='church-name'>Freedom in Christ Church</h1>
          <div className='home-welcome-statement'>
            <div className='home-welcome-title-container'>
              <h1 className='title-small'>To Proclaim and Display the</h1>
              Reconciling Work of Christ
            </div>

            <div className='newButton'>
              <Link to='/about'>
                <HomeButton text="I'm new here" />
              </Link>
              <Link to='/sermons'>
                <HomeButton text='Sermons' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeMainView
