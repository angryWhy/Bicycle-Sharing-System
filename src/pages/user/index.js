import { DatePicker, Form, Input, Modal,Radio, Select,Button} from 'antd';
import axios from 'axios';
import React, { memo, useState,useRef,forwardRef  } from 'react';
import BaseForm from '../../components/BaseForm';
import Etable from '../../components/Etable';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
const {Option} = Select
const { TextArea } = Input;
const User = (props)=> {
    const [selectedRowKeys, setSelect] = useState()
    const [show, setShow] = useState(false);
    const [selectItem, setSelectItem] = useState(null)
    const contentRef = useRef();
    const params={
        page:1
    }
    
    const formList = [
        {
            type: "INPUT",
            label: "用户名",
            field: "user_name",
            placeholder: "请输入用户名称",
            width: 100
        },
        {
            type: "INPUT",
            label: "手机号",
            field: "user_mobile",
            placeholder: "请输入用户手机号",
            width: 100
        },
        {
            type: "DATE",
            label: "请选择入职日期",
            field: "user_date",
            placeholder: "请选择日期",
            width: 100
        }

    ]
    const columns = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "用户名",
            dataIndex: "username"
        },
        {
            title: "性别",
            dataIndex: "sex"
        },
        {
            title: "状态",
            dataIndex: "state"
        },
        {
            title: "爱好",
            dataIndex: "interest"
        },
        {
            title: "生日",
            dataIndex: "birthday"
        },
        {
            title: "联系地址",
            dataIndex: "address"
        },
        {
            title: "早起时间",
            dataIndex: "time"
        },
    ]
    const datasource = [
        {
            "id": 1,
            "username": "name",
            "sex": 1,
            "state": 2,
            "interest": "游泳",
            "birthday": "2000-1-1",
            "address": "海淀区",
            "time": "9:00",
            key:0
        },
        {
            "id": 1,
            "username": "name",
            "sex": 1,
            "state": 2,
            "interest": "游泳",
            "birthday": "2000-1-1",
            "address": "海淀区",
            "time": "9:00",
            key:1,
        }
    ]
    const updateSelectItemList = (selectedRowKeys, selectedRows) => {
        setSelect(selectedRowKeys)
        setSelectItem(selectedRows)
    }
    const updateSelectItem = (selectedRowKeys, selectItem) => {
        setSelectItem(selectItem)
        setSelect(selectedRowKeys)
    }
    const handleFilter = (params) =>{
        axios.requestList()
    }
    const handleOk= ()=>{
        setShow(false)
        console.log(contentRef.current.getFieldsValue(["userName","birth","status"]));
        contentRef.current.resetFields()
    }
    const handleCancle = ()=>{
        setShow(false)
    }
    const handleOperate =() =>{
        console.log(selectItem);
    }
    return (<div>
        <BaseForm formList={formList} />
        <Button type='primary' onClick={e=>{setShow(true)}}>创建员工</Button>
        <Button type='primary' onClick={e=>{handleOperate()}} style={{marginLeft:"20px"}}>编辑员工</Button>
        <Etable columns={columns}
            dataSource={datasource}
            selectedRowKeys={selectedRowKeys}
            updateSelectItemList={updateSelectItemList}
            updateSelectItem={updateSelectItem}
        />
        <Modal title="创建员工"
               visible={show}
               onOk={e=>{handleOk()}}
               onCancel={e=>{handleCancle()}}
               >
                < CreateForm ref={contentRef}/>
        </Modal>
    </div>);
};

const CreateForm=forwardRef((props,ref) =>{
    const formLayout = {
        labelCol:{span:5},
        wrapperCol:{span:19}
    }
    return(
    <Form  ref={ref}>
        <Form.Item label="用户名" {...formLayout} name="userName">
            <Input type="text" placeholder='请输入用户名'/>
        </Form.Item>
        <Form.Item label="性别" {...formLayout}>
        <Radio.Group>
          <Radio value="1">男</Radio>
          <Radio value="2">女</Radio>
        </Radio.Group>
        </Form.Item>
        <Form.Item label="状态" {...formLayout} name="status">
            <Select>
                <Option value={1} >学习</Option >
                <Option value={2} >娱乐</Option >
                <Option value={3} >运动</Option >
                <Option value={4} >睡觉</Option >
            </Select>
        </Form.Item>
        <Form.Item label="生日" {...formLayout} name="birth">
            <DatePicker locale={locale} />
        </Form.Item>
        <Form.Item label="联系地址 "  {...formLayout} name="address">
            <TextArea rows={4} />
        </Form.Item>
    </Form>
           )
})
export default User
