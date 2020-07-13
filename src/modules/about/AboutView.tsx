import React, {FC} from 'react'
import './styles/AboutView.css'
import AboutList from './about-landingpage/AboutList'

const AboutView: FC = () => {
  return (
    <section className='about-page'>
      <h1 className='about-title'>
        <div className='about-title-header'>
          <h1 className='about-header-title'>About FCC</h1>
        </div>
        <div className='about-title-header'>
          <h2 className='about-header-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
        </div>
      </h1>
      <div className='about-content-container'>
        <div className='about-content-picture'>picture here</div>
        <div className='about-content-list-pages-container'>
          <div className='about-content-list-pages'>
            <AboutList />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutView
