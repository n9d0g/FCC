import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import './HeaderNavBar.css'
import logo from '../../../images/square-logo.png'
import {Dropdown} from 'antd'
import {CaretDownOutlined} from '@ant-design/icons'
import AboutDropdown from '../components/dropdowns/AboutDropdown'
import ConnectDropdown from '../components/dropdowns/ConnectDropdown'

const HeaderNavBar: FC = () => {
  return (
    <div className='navbar-container'>
      <Link to='/' className='logo'>
        <img className='logo-img' src={logo} alt='FCC logo' />
      </Link>
      <div className='links-container'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Dropdown overlay={AboutDropdown}>
          <Link to='/about' className='nav-drop'>
            About
            <CaretDownOutlined className='dropdown-icon' />
          </Link>
        </Dropdown>
        <Dropdown overlay={ConnectDropdown}>
          <Link to='/connect' className='nav-drop'>
            Connect <CaretDownOutlined className='dropdown-icon' />
          </Link>
        </Dropdown>
        <Link to='/events' className='nav-link'>
          Events
        </Link>
        <Link to='/sermons' className='nav-link'>
          Sermons
        </Link>

        <Link to='/give' className='nav-link'>
          Give
        </Link>
      </div>
    </div>
  )
}

export default HeaderNavBar
