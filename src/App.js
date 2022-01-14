import Header from './components/header';
import Footer from './components/footer';
import { Row,Col } from 'antd';
import 'antd/dist/antd.min.css'
import "./assets/app.less"
function App() {
  return (
    <div className="App">
      <Row>
        <Col span={3}>
          left
        </Col>
        <Col span={21}>
          <Header/>
          <Row>
            
          </Row>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
