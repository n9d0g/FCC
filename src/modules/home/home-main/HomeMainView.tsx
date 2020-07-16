import React from 'react'
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
            <HomeButton text="I'm new here" link='/about' isInverted={false} />
            <HomeButton text='Sermons' link='/sermons' isInverted={true} />
          </div>
        </div>
      </div>
      <div className='home-welcome-invitation'>
        <div className='empty-box'></div>
        <div className='home-welcome-invitation-text'>
          Join us via{' '}
          <a
            href='https://us04web.zoom.us/j/3926981154?pwd=d1BHRTB3eStxZFZIS3lyWHBieENvZz09&fbclid=IwAR3VMLAoFQ_suNQJU_16OoiOd_wb-uCCSOBU_WZsRqyufHXDk-FxkOapIEg'
            target='_blank'
            rel='noopener noreferrer'
            className='zoom-link'
          >
            ZOOM
          </a>{' '}
          on Sundays at 10:30am.{' '}
        </div>
      </div>
    </section>
  )
}

export default HomeMainView
