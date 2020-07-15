import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './AboutValuesView.css'
import CoreValueItem from '../../../components/core-value-item/CoreValueItem'

const AboutValuesView: FC = () => {
  useEffect(() => {
    document.title = 'Values | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <div className='about-subtitle-container'>
        <TitleAndBreadcrumb
          title='What We Believe'
          secondBreadcrumbTitle='About'
        />
      </div>
      <section className='about-core-values-container'>
        <div className='about-core-values-narrow'>
          <CoreValueItem coreValueNumber={1} />
          <CoreValueItem coreValueNumber={2} />
          <CoreValueItem coreValueNumber={3} />
          <CoreValueItem coreValueNumber={4} />
          <CoreValueItem coreValueNumber={5} />
          <CoreValueItem coreValueNumber={6} />
          <CoreValueItem coreValueNumber={7} />
          <CoreValueItem coreValueNumber={8} />
          <CoreValueItem coreValueNumber={9} />
          <CoreValueItem coreValueNumber={10} />
          <CoreValueItem coreValueNumber={11} />
        </div>
      </section>
    </div>
  )
}

export default AboutValuesView
