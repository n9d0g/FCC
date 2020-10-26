import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './AboutValuesView.css'
import CoreValueItem from '../../../components/core-value-item/CoreValueItem'
import * as coreValue from '../../../data/strings.json'

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
      <div className='about-core-values-description-container'>
        <div className='about-core-values-image'></div>
        <div className='about-core-values-description'>
          {coreValue.statements['about-values-description']}
        </div>
      </div>
      <section className='about-core-values-container'>
        <h2 className='about-core-values-title'>
          <a
            href='https://www.cmacan.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='CMA-text-link'
          >
            CMA
          </a>
          &nbsp;Core Values
        </h2>
        <div className='about-core-values-narrow'>
          <div className='core-value-container'>
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-1'].title}
              description={coreValue['CMA-core-values']['core-1'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-2'].title}
              description={coreValue['CMA-core-values']['core-2'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-3'].title}
              description={coreValue['CMA-core-values']['core-3'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-4'].title}
              description={coreValue['CMA-core-values']['core-4'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-5'].title}
              description={coreValue['CMA-core-values']['core-5'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-6'].title}
              description={coreValue['CMA-core-values']['core-6'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-7'].title}
              description={coreValue['CMA-core-values']['core-7'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-8'].title}
              description={coreValue['CMA-core-values']['core-8'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-9'].title}
              description={coreValue['CMA-core-values']['core-9'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-10'].title}
              description={coreValue['CMA-core-values']['core-10'].description}
            />
            <CoreValueItem
              header={coreValue['CMA-core-values']['core-11'].title}
              description={coreValue['CMA-core-values']['core-11'].description}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutValuesView
