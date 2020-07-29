import React, {FC} from 'react'
import './CoreValueItem.css'
import {Collapse} from 'antd'
const {Panel} = Collapse

interface CoreValueItemProps {
  header: string
  description: string
}

const CoreValueItem: FC<CoreValueItemProps> = ({header, description}) => {
  return (
    <Collapse accordion={true} bordered={false}>
      <Panel header={header} key='1' className='core-value-header'>
        <p className='core-value-description'>{description}</p>
      </Panel>
    </Collapse>
  )
}

export default CoreValueItem
