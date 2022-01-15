import React, { memo } from 'react'
import { Row, Col } from 'antd'
import helloImg from "../../assets/img/footer__logo.png"
import wangan from "../../assets/img/wangan.png"
import license from "../../assets/img/license-logo.jpg"
import "./index.less"
export default memo(function Footer() {
    return (
        <div className='footer'>
            <Row>
                <Col span={8} className='hello-inc'>
                    <img className='footer-logo' src={helloImg} alt='' />
                    <div className='footer-content'>
                        <div className='footer-about'>
                            <span>联系电话 95218900</span>
                            <span>上海钧正网络科技有限公司</span>
                        </div>
                        <span>增值电信业务经营许可证编号：沪B2-20201172</span>
                        <span>© hello-inc.com 沪ICP备16050850号-2</span>
                        <span> <img src={wangan} alt='' />沪公网安备 31011202007567号 | <img src={license} alt='' /></span>
                    </div>
                </Col>
                <Col span={16} className='about-hello'>
                    <Row>
                        <Col span={6}>
                            <ul>
                                <li>了解哈啰</li>
                                <li>哈啰科技</li>
                                <li>哈啰单车</li>
                                <li>哈啰助力车</li>
                                <li>哈啰电动车</li>
                                <li>小哈换电</li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <ul>
                                <li>关于哈啰</li>
                                <li>哈啰简介</li>
                                <li>领导团队</li>
                                <li>荣誉奖项</li>
                                <li>社会责任</li>
                                <li>资讯中心</li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <ul>
                                <li>联系我们</li>
                                <li>加入我们</li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <ul>
                                <li>社交网络</li>
                                <div>
                                <a href="http://weibo.com/hellobikedanche"></a>
                                <a href="https://twitter.com/Hellobike_china"></a>
                                <a href="https://www.facebook.com/hellobikechina/"></a>
                                <a href="https://www.instagram.com/hellobike_china/"></a>
                                </div>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
})
