import React, {FC} from 'react'
import ModuleListItem from '../../../components/module-list-item/ModuleListItem'

const AboutList: FC = () => {
  return (
    <div>
      <ModuleListItem
        link='/about/values'
        section='Values'
        subtext='Doctrinal Statement'
      />
      <ModuleListItem
        link='/about/mission-vision'
        section='Mission and Vision'
        subtext='To spread the gospel by word and by deed'
      />
      <ModuleListItem
        link='/about/leadership'
        section='Leadership'
        subtext='Meeting the Leadership Team'
      />
    </div>
  )
}

export default AboutList
