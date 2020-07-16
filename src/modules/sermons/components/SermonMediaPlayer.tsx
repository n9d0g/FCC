import React, {FC} from 'react'
import ReactAudioPlayer from 'react-audio-player'
import '../styles/SermonsView.css'

const SermonMediaPlayer: FC = () => {
  return (
    <div className='sermons-content-container'>
      <ReactAudioPlayer src='./June7.wav' autoPlay controls />
    </div>
  )
}

export default SermonMediaPlayer
