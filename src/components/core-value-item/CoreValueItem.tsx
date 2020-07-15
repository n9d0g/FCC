import React, {FC} from 'react'
import './CoreValueItem.css'
import * as coreValue from '../../data/strings.json'
// import {PlusCircleOutlined} from '@ant-design/icons'

interface CoreValueItemProps {
  coreValueNumber: number
}

const CoreValueItem: FC<CoreValueItemProps> = ({coreValueNumber}) => {
  return (
    <div className='core-value-container'>
      <a href='/' className='core-value-item'>
        <div className='core-value-item-content'>
          <h2 className='core-value-item-title'>
            {coreValue['CMA-core-values']['core-1'].title}
          </h2>
          <div className='core-value-item-icon'></div>
          <div className='core-value-description'>
            {coreValue['CMA-core-values']['core-1'].description}
          </div>
        </div>
      </a>
    </div>
  )
}

export default CoreValueItem
