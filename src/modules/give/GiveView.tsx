import React, {FC, useEffect} from 'react'
import GiveForm from './components/GiveForm'
import TitleAndBreadcrumb from '../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './styles/GiveView.css'

const GiveView: FC = () => {
  useEffect(() => {
    document.title = 'Give | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <section className='give-page-container'>
      <div className='give-title-container'>
        <TitleAndBreadcrumb title='Give' />
      </div>
      <GiveForm />
    </section>
  )
}

export default GiveView
