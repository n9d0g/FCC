import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './styles/SermonsView.css'

const SermonsView: FC = () => {
  useEffect(() => {
    document.title = 'Sermons | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <section className='sermons-page-container'>
      <div className='sermons-title-container'>
        <TitleAndBreadcrumb title='Sermons' />
      </div>
    </section>
  )
}

export default SermonsView
