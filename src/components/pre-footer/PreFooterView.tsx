import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import './PreFooterView.css'

const PreFooterView: FC = () => {
    return (
        <div className='pre-footer-container'>
            <div className='pre-footer-card-container'>
                <div className='pre-footer-card'>
                    <h5 className='pre-footer-card-name'>Freedom in Christ Church</h5>
                    <div className='pre-footer-links'>
                        <Link to='/about/values'>
                            <div className='pre-footer-link'>Our Values</div>
                        </Link>
                        <Link to='/connect/ministries'>
                            <div className='pre-footer-link'>Ministries</div>
                        </Link>
                        <Link to='/about/leadership'>
                            <div className='pre-footer-link'>Leadership</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreFooterView
