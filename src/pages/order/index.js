import React, { memo, useEffect, useState } from 'react';
import { Card, Table, Button, Form, Select, Row, Col, DatePicker } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import axios from 'axios';
const { Option } = Select;
const { RangePicker } = DatePicker;
export default memo(function Order() {
    const [data, setData] = useState();
    const [show,setShow] = useState(false);
    const [selectedRowKeys,setSelect] = useState()
    const [selectItem,setSelectItem] = useState()
    const columns = [
        {
            title: "订单编号",
            dataIndex: "order_sn"
        },
        {
            title: "车辆编号",
            dataIndex: "bike_sn"
        },
        {
            title: "用户名",
            dataIndex: "user_name"
        },
        {
            title: "手机号",
            dataIndex: "mobile"
        },
        {
            title: "里程",
            dataIndex: "distance"
        },
        {
            title: "行驶时长",
            dataIndex: "total_time"
        },
        {
            title: "状态",
            dataIndex: "status"
        },
        {
            title: "开始时间",
            dataIndex: "start_time"
        },
        {
            title: "结束时间",
            dataIndex: "end_time"
        },
        {
            title: "订单金额",
            dataIndex: "total_fee"
        },
        {
            title: "实付金额",
            dataIndex: "user_pay"
        },



    ]
    useEffect(
        () => {
            axios.get("/api/order.json").then(
                res => {
                    const newRes=res.data.result.list.map((item,index)=>{
                        item.key=index
                        return item
                    })
                    console.log(res);
                    setData(newRes)
                }
            )
        }, []
    )
    const handleConfirm= () =>{

    }
    const onRowClick=(record,index)=>{
        let selectKey=[index]
        setSelectItem(record)
        setSelect(selectKey)

    }
    const rowCheckSelection={
        type:"checkbox",
        selectedRowKeys,
        onChange:(selectedRowKeys,selectedRows)=>{
            setSelect(selectedRowKeys)
            setSelectItem(selectedRows)
        }
    }
    return <div>
        <Card>
            <Form>
                <Row>
                    <Col span={4}>
                        <Form.Item label="城市" name="city">
                            <Select>
                                <Option value="">全部</Option>
                                <Option value="1">北京</Option>
                                <Option value="2">杭州</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item style={{ marginLeft: "20px" }} name="date">
                            <RangePicker locale={locale} placeholder={["选择开始时间","选择结束时间"]}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="订单状态" name="orderstatus" style={{ marginLeft: "20px" }}>
                            <Select>
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">进行中(临时锁车)</Option>
                                <Option value="3">行程结束</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                    <Form.Item style={{ marginLeft: "40px" }} >
                    <Button type='primary'>查询</Button>
                    <Button type='primary' style={{ marginLeft: "20px" }}>重置</Button>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
        <Card style={{ marginTop: "10px" }}>
            <Button type='primary'>订单详情</Button>
            <Button type='primary' onClick={handleConfirm}>结束订单</Button>
        </Card>
        <div className='content-wrap'>
            <Table columns={columns}  dataSource={data}  rowSelection={rowCheckSelection}  onRow={(record,index) => {
                    return {
                      onClick: event => {onRowClick(record,index)}, // 点击行
                    };
                  }}/>
        </div>
    </div>;
});
