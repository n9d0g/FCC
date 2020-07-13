import React, {FC} from 'react'
import ModuleListItem from '../../components/module-list-item/ModuleListItem'
import './styles/ConnectView.css'

const ConnectView: FC = () => {
  return (
    <section className='about-page'>
      <h1 className='about-title'>
        <div className='about-title-header'>
          <h1 className='about-header-title'>Connect with us!</h1>
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
            <ModuleListItem
              link='/connect/ministries'
              section='Ministries'
              subtext='See the ministries at FCC'
            />
            <ModuleListItem
              link='/connect/small-groups'
              section='Small Groups'
              subtext='Small groups in Mississauga and Brampton'
            />
            <ModuleListItem
              link='/connect/services'
              section='Weekly Church Services'
              subtext='Location and Service times'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectView
