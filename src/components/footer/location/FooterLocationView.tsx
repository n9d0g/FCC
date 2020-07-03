import React, {FC} from 'react'
import './FooterLocationView.css'

const FooterLocationView: FC = () => {
  return (
    <p className='footer-location'>
      <div className='address'>
        5225 Orbitor Dr
        <br />
        Mississauga, ON
        <br />
        <br />
      </div>
      <div className='phone'>
        123-123-1234
        <br /> Contact Us
        <br /> <br />
      </div>
      <div className='service-time'>
        Service Times: <br />
        10:30a via Zoom
      </div>
    </p>
  )
}

export default FooterLocationView
