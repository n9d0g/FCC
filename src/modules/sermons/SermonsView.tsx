import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const SermonsView: FC = () => {
  useEffect(() => {
    document.title = 'Sermons | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <section className='sermons-page-container'>
      <TitleAndBreadcrumb />
    </section>
  )
}

export default SermonsView
