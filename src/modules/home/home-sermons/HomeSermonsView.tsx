import React, {FC} from 'react'
import './HomeSermonsView.css'
import SermonTile from '../components/SermonTile'
import ViewAllButton from '../components/ViewAllButton'

const HomeSermonsView: FC = () => {
  return (
    <section className='home-sermons'>
      <div className='home-sermons-container'>
        <div className='home-sermons-header-container'>
          <h2 className='home-sermons-title'>HomeSermonsView</h2>
          <ViewAllButton />
        </div>
        <div className='home-sermons-sermonlist'>
          <SermonTile />
          <SermonTile />
          <SermonTile />
        </div>
      </div>
    </section>
  )
}

export default HomeSermonsView
