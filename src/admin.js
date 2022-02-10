import React, { memo } from 'react';
import NavLeft from './common/navLeft';
import Header from './components/header';
import Footer from './components/footer';
import AntdButton from './pages/premistion/index'
import { Row,Col } from 'antd';
import "./assets/css/app.less"
import 'antd/dist/antd.min.css'
import Detail from "./components/BaseForm/index";
import { HashRouter } from 'react-router-dom';
export default memo(function Admin() {
  return <div>
       <HashRouter>
      <Row className='container'>
        <Col span={4} className='nav-left'>
        <NavLeft/>
        </Col>
        <Col span={20} className='main'>
          <Header/>
          <Row className='content'>
            <Col span={24}> 
            
            <AntdButton/>
            
            </Col>
          </Row>
          <Footer/>
        </Col>
      </Row>
      </HashRouter>
  </div>;
});
