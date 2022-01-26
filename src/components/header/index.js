import React, { memo, useState,useEffect } from 'react'

import { formateDate } from '../../utils/format-Date'

import { Col, Row } from 'antd'
import "./index.less"
export default memo(function Header() {
    const [userName] = useState("userName")
    const [date, setDate] = useState(formateDate(new Date()))
    useEffect(() => {
        setInterval(() => {
            setDate(formateDate(new Date()))
        }, 1000);
    }, [])
    return (
        <div className='header'>
            <Row className='header-top'>
                <Col span={24}>
                    <span>欢迎,{userName}</span>
                    <a href='/todo'>退出</a>
                </Col>
            </Row>
            <Row className='breadcrumb'>
                <Col span={4} className='breadcrumb-title'>
                    首页
                </Col>
                <Col span={20} className='weather'>
                    <span className='date'>{date}</span>
                    <span className='weather-detail'>多云转晴</span>
                </Col>
            </Row>
        </div>
    )
})
