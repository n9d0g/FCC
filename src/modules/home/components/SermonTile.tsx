import React, {FC} from 'react'
import '../home-sermons/HomeSermonsView.css'
import {Link} from 'react-router-dom'

const SermonTile: FC = () => {
  return (
    <Link to='/sermons' className='home-sermons-tile-link'>
      <div className='sermonitem-textcard'>
        <div className='sermonitem-hover'></div>
        <div className='sermonitem-content'>
          <h2 className='sermonitem-title'>Sermon Title</h2>
          <div className='sermonitem-preacher'>Sermon Preacher</div>
          <div className='sermonitem-date'>Sermon Date</div>
        </div>
      </div>
      <div className='sermonitem-art'></div>
    </Link>
  )
}

export default SermonTile
