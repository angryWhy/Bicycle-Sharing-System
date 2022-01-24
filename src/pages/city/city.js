import React, { memo, useEffect, useRef, useState } from 'react';
import { Card, Table, Badge, Modal, message, Button, Form, Input, Select, Row, Col } from 'antd';
import axios from 'axios';
const { Option } = Select;
const City = (props) => {
    const columns=[
        {
            title:"城市ID",
            dataIndex:"id"
        },
        {
            title:"城市名称",
            dataIndex:"name"
        },
        {
            title:"用车模式",
            dataIndex:"mode"
        },
        {
            title:"运营模式",
            dataIndex:"op_mode"
        },
        {
            title:"授权加盟商",
            dataIndex:"auth_mode"
        },
        {
            title:"城市管理员",
            dataIndex:"city_admins",
            render(arr){
                return arr.map(item=>{
                    return item.user_name
                }).join(",")
            }
        },
        {
            title:"城市开通时间",
            dataIndex:"open_time"
        },
        {
            title:"操作时间",
            dataIndex:"id"
        },
        {
            title:"操作人",
            dataIndex:"sys_user_name"
        }
    ]
    const openCity= () =>{
        setShow(true)
    }
    const handleSubmit= () =>{

    }
    const [datares, setDatares] = useState();
    const [show,setShow] = useState(false);
    const modalChild=useRef();
    useEffect(() => {
      axios.get("/api/city.json").then(
          res=>{
              const result=res.data.result.item_list
              const newres=result.map((item,index)=>{
                  item.key=index
                  return item
              })
              setDatares(newres)
          }
      )
    }, []);
    
    return (<div>
        <Card>
            <Main />
        </Card>
        <Card>
            <Button type='primary' onClick={e=>{openCity()}}>开通城市</Button>
        </Card>
        <Table columns={columns} dataSource={datares} />
        <Modal title="开通城市" visible={show} onCancel={e=>{setShow(false)}} onOk={e=>{handleSubmit()}}>
            <Content/>
        </Modal>
    </div>
    )
}
const Main = memo(function City() {
    return <div>
        <Form>
            <Row>
                <Col span={4}>
                    <Form.Item
                        label="城市"
                        name="city"
                    >
                        <Select style={{ width: 100 }}>
                            <Option value="">全部</Option>
                            <Option value="1">杭州</Option>
                            <Option value="2">北京</Option>
                            <Option value="3">天津</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        label="用车模式"
                        name="usemodel"

                    >
                        <Select style={{ width: 100 }}>
                            <Option value="">全部</Option>
                            <Option value="1">指定停车点模式</Option>
                            <Option value="2">禁停区模式</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        label="运营模式"
                        name="promodel"

                    >
                        <Select style={{ width: 100 }}>
                            <Option value="">全部</Option>
                            <Option value="1">自营模式</Option>
                            <Option value="2">加盟模式</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        label="授权模式"
                        name="admitmodel"
                    >
                        <Select style={{ width: 100 }}>
                            <Option value="">全部</Option>
                            <Option value="1">已授权</Option>
                            <Option value="2">未授权</Option>
                        </Select>
                    </Form.Item>
                </Col>
                < Col span={4}>
                    <Form.Item>
                        <Button type='primary' style={{ marginLeft: "40px" }}>查询</Button>
                        <Button type='primary' style={{ marginLeft: "20px" }}>重置</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </div>;
});
const Content= () =>{
    const formItemLayout = {
        labelCol:{
            span:6
        },
        wrapperCol:{
            span:10
        }
    }
    return(
        <Form layout='horizontal' >
            <Form.Item label="选择城市" {...formItemLayout}>
                <Select>
                    <Option value="">全部</Option>
                    <Option value="1">北京</Option>
                    <Option value="2">上海</Option>
                </Select>
            </Form.Item>
            <Form.Item label="加盟模式" {...formItemLayout}>
                <Select>
                    <Option value="1">自营</Option>
                    <Option value="2">加盟</Option>
                </Select>
            </Form.Item>
            <Form.Item label="用车模式" {...formItemLayout}>
                <Select>
                    <Option value="1">指定停车点</Option>
                    <Option value="2">禁停区</Option>
                </Select>
            </Form.Item>
        </Form>
    )
}
export default City