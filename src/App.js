import NavLeft from './common/navLeft';
import Header from './components/header';
import Footer from './components/footer';
import { Row,Col } from 'antd';
import "./assets/css/app.less"
import 'antd/dist/antd.min.css'
function App() {
  return (
    <>
      <Row className='container'>
        <Col span={3} className='nav-left'>
        <NavLeft/>
        </Col>
        <Col span={21} className='main'>
          <Header/>
          <Row className='content'>
            
          </Row>
          <Footer/>
        </Col>
      </Row>
      </>
  );
}

export default App;
