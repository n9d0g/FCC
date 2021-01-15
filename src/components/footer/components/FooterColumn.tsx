import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Column from './FooterColumnInterface'

interface FooterColumnProps {
    columns: Column[]
}

const FooterColumn: FC<FooterColumnProps> = ({
    columns,
}: FooterColumnProps) => {
    return (
        <div className="footer-column-container">
            {columns.map((item) => {
                return (
                    <>
                        <Link to={item.link} className="footer-column-link">
                            {item.value}
                        </Link>
                        <br />
                    </>
                )
            })}
        </div>
    )
}

export default FooterColumn
