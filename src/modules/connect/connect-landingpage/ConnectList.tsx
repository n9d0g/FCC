import React, { FC } from 'react'
import ModuleListItem from '../../../components/module-list-item/ModuleListItem'

const ConnectList: FC = () => {
    return (
        <div>
            <ModuleListItem
                link="/connect/ministries"
                section="Ministries"
                subtext="See the ministries at FCC"
            />
            <ModuleListItem
                link="/connect/small-groups"
                section="Small Groups"
                subtext="Small groups in Mississauga and Brampton"
            />
            <ModuleListItem
                link="/connect/services"
                section="Weekly Church Services"
                subtext="Location and Service times"
            />
        </div>
    )
}

export default ConnectList
