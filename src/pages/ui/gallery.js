import React, { memo, useState } from 'react'
import { Card, Row, Col,Modal } from 'antd'

function Gallery(props) {
    const [visible1, setVisible] = useState(false)
    const [imgItem, setImgItem] = useState("")
    const imgs = [
        ['1.png', '2.png', '3.png', '4.png', '5.png'],
        ['6.png', '7.png', '8.png', '9.png', '10.png'],
        ['11.png', '12.png', '13.png', '14.png', '15.png'],
        ['16.png', '17.png', '18.png', '19.png', '20.png'],
        ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]
    const imgList = imgs.map((list) => list.map((item) =>
        <Card key={item}
            style={{ marginBottom: 10 }}
            cover={<img src={require(`../../resource/gallery/${item}`)} alt="" onClick={e=>{setImgItem(item);setVisible(true)}} />}
        >
            <Card.Meta
                title="React"
                description="I Love Imooc"
            />
        </Card>
    ))
    function getUrl(imgItem) {
        return `${process.env.PUBLIC_URL}`
    }
    return (
        <div className="card-wrap">
            <Row gutter={10}>
                <Col md={5}>
                    {imgList[0]}
                </Col>
                <Col md={5}>
                    {imgList[1]}
                </Col>
                <Col md={5}>
                    {imgList[2]}
                </Col>
                <Col md={5}>
                    {imgList[3]}
                </Col>
                <Col md={4}>
                    {imgList[4]}
                </Col>
            </Row>
            <Modal
                width={300}
                height={500}
                visible={visible1}
                title="图片画廊"
                onCancel={() => {
                    setVisible(false)
                }}
                footer={null}
            >
                {<img src={getUrl(imgItem)} alt="" style={{ width: '100%' }} />}
            </Modal>
        </div>
    );
}
export default memo(Gallery)