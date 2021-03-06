import React from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'

const ConnectDropdown = (
  <Menu className='dropdown'>
    <Menu.Item>
      <Link to='/connect/ministries'>Ministries</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/connect/small-groups'>Small Groups</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/connect/services'>Weekly Church Services</Link>
    </Menu.Item>
  </Menu>
)

export default ConnectDropdown
