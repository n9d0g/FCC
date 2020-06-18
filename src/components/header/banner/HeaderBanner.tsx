import React, {FC} from 'react'
import './HeaderBanner.css'

const HeaderBanner: FC = () => {
  return (
    <div className='banner-container'>
      JOIN US VIA{' '}
      <a
        href='https://us04web.zoom.us/j/3926981154?pwd=d1BHRTB3eStxZFZIS3lyWHBieENvZz09&fbclid=IwAR3VMLAoFQ_suNQJU_16OoiOd_wb-uCCSOBU_WZsRqyufHXDk-FxkOapIEg'
        target='_blank'
        rel='noopener noreferrer'
        className='banner-text-link'
      >
        ZOOM
      </a>{' '}
      ON SUNDAYS AT 10:30A
    </div>
  )
}

export default HeaderBanner
