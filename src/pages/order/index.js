import React, { memo, useEffect, useState } from 'react';
import { Card, Table, Button, Form, Select, Row, Col, DatePicker, Modal } from 'antd';
import 'moment/locale/zh-cn';
import BaseForm from "../../components/BaseForm/index"
import locale from 'antd/lib/date-picker/locale/zh_CN';
import axios from 'axios';
import Etable from '../../components/Etable';

const { Option } = Select;
const { RangePicker } = DatePicker;
export default memo(function Order() {
    const [data, setData] = useState();
    const [show,setShow] = useState(false);
    const [selectedRowKeys,setSelect] = useState()
    const [selectItem,setSelectItem] = useState(null)
    const [cancleData,setCancleData] = useState();
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

    const formList=[
        {
            type:"SELECT",
            label:"城市",
            field:"city",
            placeholder:"全部",
            initValue:"1",
            width:100,
            list:[{id:"0",name:"全部"},{id:"1",name:"北京"},{id:"2",name:"天津"},{id:"3",name:"上海"}]
        },
        {
            type:"SELECT",
            label:"订单状态",
            field:"status",
            placeholder:"全部",
            initValue:"1",
            width:100,
            list:[{id:"0",name:"全部"},{id:"1",name:"进行中"},{id:"2",name:"结束行程"}]
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
        type:"radio",
        selectedRowKeys,
        onChange:(selectedRowKeys,selectedRows)=>{
            setSelect(selectedRowKeys)
            setSelectItem(selectedRows)
        }
    }
    const handleDetail =() =>{
        setShow(true)
        // axios.get("/api/orderData.json").then(
        //     res=>{
        //         console.log(res.data.result.list[0]);
        //         setCancleData(res.data.result.list[0])
        //     }
        // )
        console.log(selectItem);
        const newData=Object.assign({},selectItem)
        setCancleData(newData)
        console.log(cancleData);
    }
    const handleCancleOk= ()=>{
        
        //网络请求
        Modal.success({
            title:"订单结束成功"
        })
        setShow(false)
    }
    const handleDetailCancel = ()=>{
        setShow(false)
        Modal.error({
            title:"订单结束失败"
        })
    } 
    const Detail = () =>{
        if(!selectItem){
            Modal.info({
                title:"提示",
                content:"请选择一条信息"
            })
        }   
    }
    const updateSelectItem = (selectedRowKeys,selectItem)=>{
        setSelectItem(selectItem)
        setSelect(selectedRowKeys) 
    }
    const updateSelectItemList = (selectedRowKeys,selectedRows) =>{
            setSelect(selectedRowKeys)
            setSelectItem(selectedRows)
    }
    const propsClick= (record,selectKey) =>{
        setSelectItem(record)
        setSelect(selectKey)
    }
    return (<div>
        {/* 上面的搜索和按钮 */}
        <BaseForm formList={formList}/>
       {/* Etable */}
       <Etable
       updateSelectItem={updateSelectItem}
       columns={columns}
       dataSource={data}
       row_Selection="radio"
       selectedRowKeys={selectedRowKeys}
       updateSelectItemList={updateSelectItemList}
       
       
       />
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
            <Button type='primary' style={{ marginLeft: "20px" }} onClick={e=>{Detail()}}>订单详情</Button>
            <Button type='primary' style={{ marginLeft: "20px" }} onClick={e=>{handleDetail()}}>结束订单</Button>
        </Card>
        <div className='content-wrap'>
            <Table columns={columns}  dataSource={data}  rowSelection={rowCheckSelection}  onRow={(record,index) => {
                    return {
                      onClick: event => {onRowClick(record,index)}, // 点击行
                    };
                  }}/>
        </div>
        <Modal visible={show} title="结束订单" onOk={e=>{handleCancleOk()}} onCancel={e=>{handleDetailCancel()}}>
            <Form>
                <Form.Item label="车辆编号">
                    {selectItem?selectItem.bike_sn:null}
                </Form.Item>
                <Form.Item label="剩余电量">
                    80%
                </Form.Item>
                <Form.Item label="行程开始时间">
                    {selectItem?selectItem.start_time:null}
                </Form.Item>
                <Form.Item label="当前位置">
                    {selectItem?selectItem.bike_sn:null}
                </Form.Item>
            </Form>
        </Modal>
    </div>);
});
