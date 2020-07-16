import React, {FC} from 'react'
import '../styles/HomeView.css'
import {Link} from 'react-router-dom'

interface HomeButtonProps {
  text: string
  link: string
  isInverted: boolean
}

const HomeButton: FC<HomeButtonProps> = ({text, link, isInverted}) => {
  let buttonStyle = 'home-button'
  if (isInverted) buttonStyle = 'home-button-inverted'

  return (
    <Link to={link} className={buttonStyle}>
      {text}
    </Link>
  )
}

export default HomeButton
